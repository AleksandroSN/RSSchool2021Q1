import { BaseComponent } from "../components/base-components";
import { Button } from "../components/buttons/buttons";
import { Garage } from "../pages/garage";
import { Winners } from "../pages/winners";
import { Pagination } from "./pagination";

export class Navigate extends BaseComponent {
  readonly toGarageBtn: Button;

  readonly toWinnersBtn: Button;

  currentPage!: Garage | Winners;

  currentPagination!: Pagination;

  readonly garagePage: Garage;

  readonly winnersPage: Winners;

  readonly paginationGarage: Pagination;

  readonly paginationWinners: Pagination;

  constructor() {
    super("header", ["navigate"]);
    this.toGarageBtn = new Button(
      ["navigate__garage", "btn", "btn--bold"],
      "button",
      "btn__nav",
      "To garage"
    );
    this.toWinnersBtn = new Button(
      ["navigate__winners", "btn", "btn--bold"],
      "button",
      "btn__nav",
      "To winners"
    );
    this.element.append(this.toGarageBtn.element, this.toWinnersBtn.element);
    this.garagePage = new Garage();
    this.winnersPage = Winners.getInstance();
    this.paginationGarage = new Pagination("garagePage");
    this.paginationWinners = new Pagination("winnersPage");
    this.currentPage = this.garagePage;
    this.currentPagination = this.paginationGarage;
  }
}
