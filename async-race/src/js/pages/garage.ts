import { createCar, updateCar } from "../api/car-api";
import { BaseComponent } from "../components/base-components";
import { carsOnPage } from "../components/car/carTrack";
import { GenerateCarForm } from "../sections/generateCar";
import { Race } from "../sections/raceSection";
import { updateAndCreateWinner } from "../shared/updateAndCreateWinner";
import { announcWinner } from "../templates/template";
import { race } from "../utils/race";
import { countAllCars, createRandomCars } from "../utils/utils";

export class Garage extends BaseComponent {
  private readonly generateSection: GenerateCarForm;

  private readonly raceSection: Race;

  constructor() {
    super("main", ["main"]);
    this.generateSection = GenerateCarForm.getInstance();
    this.raceSection = Race.getInstance();
    this.element.append(this.generateSection.element, this.raceSection.element);
    this.listenerForCreateCar();
    this.listenerForUpdateCar();
    this.listenGenerateCarsBtn();
    this.listenRaceBtn();
    this.listenResetBtn();
  }

  listenerForCreateCar() {
    this.generateSection.createCarForm.element.addEventListener("submit", async (evt: Event) => {
      evt.preventDefault();
      const inputsValue = this.generateSection.createCarForm.getInputsValue();
      this.generateSection.createCarForm.element.reset();
      await createCar(inputsValue);
      this.raceSection.removeCars();
      await this.raceSection.addCars();
    });
  }

  listenerForUpdateCar() {
    this.generateSection.updateCarForm.element.addEventListener("submit", async (evt: Event) => {
      evt.preventDefault();
      const inputsValue = this.generateSection.updateCarForm.getInputsValue();
      const idCar = Number(localStorage.getItem("carID"));
      localStorage.removeItem("carID");
      this.generateSection.updateCarForm.element.reset();
      this.generateSection.updateCarForm.textInput.element.disabled = true;
      await updateCar(idCar, inputsValue);
      this.raceSection.removeCars();
      this.raceSection.addCars();
    });
  }

  listenGenerateCarsBtn() {
    this.generateSection.generateCarBtn.element.addEventListener("click", async () => {
      await createRandomCars();
      await countAllCars().then((response) => {
        this.raceSection.countCars.textContent = response.count;
      });
      this.raceSection.removeCars();
      await this.raceSection.addCars();
    });
  }

  listenRaceBtn() {
    this.generateSection.raceBtn.element.addEventListener("click", async () => {
      this.generateSection.resetBtn.element.disabled = false;
      this.generateSection.raceBtn.element.disabled = true;
      const winner = race();
      winner.then(async (x) => {
        await updateAndCreateWinner(x.id, x);
        this.raceSection.element.insertAdjacentHTML("beforeend", announcWinner(x.carName, x.time));
      });
    });
  }

  listenResetBtn() {
    this.generateSection.resetBtn.element.addEventListener("click", () => {
      this.raceSection.removeAnnounceWinner();
      this.generateSection.resetBtn.element.disabled = true;
      this.generateSection.raceBtn.element.disabled = false;
      carsOnPage.map((x) => x.carInstance.stopDriving());
    });
  }
}
