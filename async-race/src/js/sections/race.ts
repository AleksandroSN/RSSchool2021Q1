import { BaseComponent } from "../components/base-components";
import { Car } from "../components/car/car";
import { garageTitle, currentPage } from "../templates/template";

export class Race extends BaseComponent {
  track!: HTMLElement;

  cars: Car[] = [];

  constructor() {
    super("section", ["garage"]);
    this.element.insertAdjacentHTML("afterbegin", currentPage(1));
    this.element.insertAdjacentHTML("afterbegin", garageTitle(4));
    this.element.append(this.createDiv());
    this.addCar([new Car(), new Car()]);
  }

  private createDiv() {
    this.track = document.createElement("div");
    this.track.classList.add("garage__cars");
    return this.track;
  }

  addCar(cars: Car[]) {
    this.cars = cars;
    this.cars.forEach((car) => this.track.append(car.element));
  }
}
