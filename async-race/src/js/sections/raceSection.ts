import { BaseComponent } from "../components/base-components";
import { getAllCars } from "../shared/getAllCars";
import { garageTitle, currentPage } from "../templates/template";

export class Race extends BaseComponent {
  track!: HTMLElement;

  countCars!: HTMLElement;

  pageNumber: HTMLElement;

  private garagePage = 1;

  private static instance: Race;

  constructor() {
    super("section", ["garage"]);
    this.element.insertAdjacentHTML("afterbegin", currentPage(1));
    this.element.insertAdjacentHTML("afterbegin", garageTitle(4));
    this.element.append(this.createDiv());
    this.countCars = this.element.querySelector(".count-cars") as HTMLElement;
    this.pageNumber = this.element.querySelector(
      ".garage__page"
    ) as HTMLElement;
    this.addCars();
  }

  private createDiv() {
    this.track = document.createElement("div");
    this.track.classList.add("garage__cars");
    return this.track;
  }

  public static getInstance(): Race {
    if (!Race.instance) {
      Race.instance = new Race();
    }

    return Race.instance;
  }

  async addCars() {
    const totalCars = await getAllCars(
      this.garagePage,
      this.countCars,
      this.track
    );
    return totalCars;
  }

  removeCars() {
    while (this.track.firstChild) {
      this.track.removeChild(this.track.firstChild);
    }
  }

  removeAnnounceWinner() {
    if (this.element.lastElementChild?.classList.contains("garage__winners")) {
      this.element.lastElementChild.remove();
    }
  }
}
