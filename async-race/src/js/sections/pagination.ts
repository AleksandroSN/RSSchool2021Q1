import { GetWinners } from "../api/winner-api";
import { BaseComponent } from "../components/base-components";
import { Button } from "../components/buttons/buttons";
import { Winners } from "../pages/winners";
import { countAllCars, handlerPaginationBtn } from "../utils/utils";
import { Race } from "./raceSection";

export const paginationButtons: Button[] = [];

export class Pagination extends BaseComponent {
  private readonly prevBtn: Button;

  private readonly nextBtn: Button;

  private readonly raceSection: Race;

  private readonly winnersPage: Winners;

  currentPage: number;

  countCars!: string;

  countWinners!: string;

  constructor(private readonly page: string) {
    super("footer", ["pagination"]);
    this.prevBtn = new Button(
      ["prev-page", "btn"],
      "button",
      "btn__other",
      "Prev"
    );
    this.nextBtn = new Button(
      ["next-page", "btn"],
      "button",
      "btn__other",
      "Next"
    );
    paginationButtons.push(this.prevBtn, this.nextBtn);
    this.element.append(this.prevBtn.element, this.nextBtn.element);
    this.currentPage = 1;
    this.raceSection = Race.getInstance();
    this.winnersPage = Winners.getInstance();
    this.listenPaginationBtn(this.nextBtn, "next");
    this.listenPaginationBtn(this.prevBtn, "prev");
    localStorage.setItem(`${this.page}`, String(this.currentPage));
    this.checkPage();
  }

  listenPaginationBtn(button: Button, direction: string) {
    button.element.addEventListener("click", async () => {
      this.directionPagination(direction);
      localStorage.setItem(`${this.page}`, String(this.currentPage));
      if (this.page === "garagePage") {
        this.raceSection.pageNumber.textContent = String(this.currentPage);
        this.raceSection.removeAnnounceWinner();
        this.raceSection.removeCars();
        await this.raceSection.addCars();
        handlerPaginationBtn(
          this.currentPage,
          this.countCars,
          this.nextBtn,
          this.prevBtn,
          7
        );
      } else {
        await this.winnersPage.createWinners(this.currentPage, "wins", "DESC");
        this.winnersPage.getMarkup();
        handlerPaginationBtn(
          this.currentPage,
          this.countWinners,
          this.nextBtn,
          this.prevBtn,
          10
        );
      }
    });
  }

  private directionPagination(direction: string): string {
    if (direction === "next") {
      this.currentPage += 1;
    } else if (direction === "prev") {
      this.currentPage -= 1;
    }
    return direction;
  }

  checkPage() {
    if (this.page === "garagePage") {
      countAllCars().then((response) => {
        this.countCars = response.count as string;
        handlerPaginationBtn(
          this.currentPage,
          response.count as string,
          this.nextBtn,
          this.prevBtn,
          7
        );
      });
    } else {
      GetWinners(this.currentPage, 10, "wins", "DESC").then((response) => {
        this.countWinners = response.countWinners as string;
        handlerPaginationBtn(
          this.currentPage,
          response.countWinners as string,
          this.nextBtn,
          this.prevBtn,
          10
        );
      });
    }
  }
}
