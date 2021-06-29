import { BaseComponent } from "../components/base-components";
import { TableWinners } from "../components/table/tableWinners";
import { tableWinners } from "../interfaces-and-types/interfaces";
import { Counters } from "../shared/counters";
import { createResultArr } from "../shared/getAllWinners";
import { carMarkup } from "../templates/template";
import { ASC, DESC, Order } from "../interfaces-and-types/types";

export class Winners extends BaseComponent {
  private resArr: tableWinners[] = [];

  private countWinners!: number;

  private section!: HTMLElement;

  private countWin: Counters;

  private countPage: Counters;

  private tableWinners: TableWinners;

  private currPage: string | number;

  private static instance: Winners;

  constructor() {
    super("main", ["main"]);
    this.element.append(this.createSection());
    this.countWin = new Counters("winners__count", "(1)", "Winners ");
    this.countPage = new Counters("winners__page", "1", "Page #");
    this.tableWinners = new TableWinners();
    this.section.append(this.countWin.counter, this.countPage.counter, this.tableWinners.element);
    this.currPage = localStorage.getItem("winnersPage") as string;
    this.addListeners();
  }

  public static getInstance(): Winners {
    if (!Winners.instance) {
      Winners.instance = new Winners();
    }
    return Winners.instance;
  }

  createSection() {
    this.section = document.createElement("section");
    this.section.classList.add("winners");
    return this.section;
  }

  async createWinners(winnersPage: number, sortBy: string, order: string): Promise<tableWinners[]> {
    this.resArr = [];
    await createResultArr(winnersPage, sortBy, order).then((arr) => {
      this.countWinners = Number(arr.count);
      arr.resArr.forEach((x) => {
        this.resArr.push(x);
      });
    });
    return this.resArr;
  }

  renderWinners(): string {
    return this.resArr
      .map(
        (winner) => `<tr>
      <td>${winner.id}</td>
      <td class="winners__car-icon">${carMarkup(winner.color)}</td>
      <td>${winner.name}</td>
      <td>${winner.wins}</td>
      <td>${winner.time}"s</td>
    </tr>`
      )
      .join("");
  }

  getMarkup() {
    this.currPage = localStorage.getItem("winnersPage") as string;
    this.countWin.counterSpan.textContent = `(${this.countWinners})`;
    this.countPage.counterSpan.textContent = this.currPage as string;
    this.tableWinners.removeTbody();
    this.tableWinners.tBody.insertAdjacentHTML("afterbegin", this.renderWinners());
  }

  /* eslint-disable no-param-reassign */
  listenerForSortBy(th: HTMLElement, innerText: string, param: string, order: string): void {
    let temp = order;
    th.addEventListener("click", async () => {
      this.tableWinners.thId.clearLastchr();
      this.tableWinners.thWins.clearLastchr();
      this.tableWinners.thTime.clearLastchr();
      await this.createWinners(Number(this.currPage), param, temp);
      this.getMarkup();
      if (order === DESC as Order) {
        order = ASC as Order;
        th.textContent = `${innerText} ↑`;
      } else {
        order = DESC as Order;
        th.textContent = `${innerText} ↓`;
      }
      temp = order;
    });
  }
  /* eslint-enable no-param-reassign */

  addListeners() {
    this.listenerForSortBy(this.tableWinners.thId.element, "Number", `id`, DESC as Order);
    this.listenerForSortBy(this.tableWinners.thWins.element, "Wins", `wins`, DESC as Order);
    this.listenerForSortBy(this.tableWinners.thTime.element, "Best time (seconds)", `time`, DESC as Order);
  }
}
