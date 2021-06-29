import { deleteCar, GetCars } from "../../api/car-api";
import { deleteWinner } from "../../api/winner-api";
import { ParamCar } from "../../interfaces-and-types/interfaces";
import { GenerateCarForm } from "../../sections/generateCar";
import { LIMIT_CARS } from "../../utils/utils";
import { BaseComponent } from "../base-components";
import { Button } from "../buttons/buttons";
import { Car } from "./car";

export const carsOnPage: CarTrack[] = [];

export class CarTrack extends BaseComponent {
  private readonly selectBtn: Button;

  private readonly removeBtn: Button;

  readonly carInstance: Car;

  time!: number;

  wins = 0;

  private readonly generateSection: GenerateCarForm;

  private garagePage!: number;

  constructor(
    readonly carName: string,
    readonly color: string,
    readonly id: number,
    private readonly track: HTMLElement,
    private readonly countCars: HTMLElement
  ) {
    super("div", ["garage__track"]);
    this.selectBtn = new Button(["garage__select", "btn"], "button", "btn__other", "Select");
    this.removeBtn = new Button(["garage__remove", "btn"], "button", "btn__other", "Remove");
    this.carInstance = new Car(this.color);
    this.element.append(
      this.selectBtn.element,
      this.removeBtn.element,
      this.createCarName(),
      this.carInstance.element
    );
    this.element.insertAdjacentHTML(
      "beforeend",
      `<img class="flag" src="./assets/flag.png" alt="flag">`
    );
    this.carInstance.createCar(this.id);
    this.ListenerSelectBtn();
    this.ListenerRemoveBtn();
    this.generateSection = GenerateCarForm.getInstance();
  }

  private createCarName() {
    const span = document.createElement("span");
    span.classList.add("garage__car-name");
    span.textContent = this.carName;
    return span;
  }

  private ListenerSelectBtn() {
    this.selectBtn.element.addEventListener("click", () => {
      localStorage.setItem("carID", this.carInstance.carDiv.id);
      this.generateSection.updateCarForm.textInput.element.disabled = false;
      this.generateSection.updateCarForm.textInput.element.value = this.carName;
    });
  }

  private ListenerRemoveBtn() {
    this.removeBtn.element.addEventListener("click", async () => {
      await deleteCar(Number(this.carInstance.carDiv.id));
      await deleteWinner(Number(this.carInstance.carDiv.id));
      this.track.innerHTML = "";
      this.garagePage = Number(localStorage.getItem("garagePage"));
      carsOnPage.length = 0;
      GetCars(this.garagePage, LIMIT_CARS).then((arrayCars) => {
        const resArr = arrayCars.resultArray as ParamCar[];
        localStorage.setItem("carsOnPage", JSON.stringify(resArr));
        this.countCars.textContent = arrayCars.count;
        resArr.forEach((car) => {
          const newCar = new CarTrack(car.name, car.color, car.id, this.track, this.countCars);
          carsOnPage.push(newCar);
          this.track.append(newCar.element);
        });
      });
    });
  }
}
