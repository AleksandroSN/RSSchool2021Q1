import { BaseComponent } from "../base-components";
import { Th } from "./createTh";
import { CreateTr } from "./createTr";

export class TableWinners extends BaseComponent {
  private tHead!: HTMLTableSectionElement;

  private tr!: CreateTr;

  tBody!: HTMLElement;

  readonly thId: Th;

  private readonly thCar: Th;

  private readonly thName: Th;

  readonly thWins: Th;

  readonly thTime: Th;

  constructor() {
    super("table", ["table"]);
    this.createThead();
    this.createTbody();
    this.thId = new Th(["order-by-id"], "Number");
    this.thCar = new Th(["order-by-car"], "Car");
    this.thName = new Th(["order-by-carname"], "Name");
    this.thWins = new Th(["order-by-wins"], "Wins");
    this.thTime = new Th(["order-by-time"], "Best time (seconds)");
    this.tr = new CreateTr();
    this.tr.element.append(
      this.thId.element,
      this.thCar.element,
      this.thName.element,
      this.thWins.element,
      this.thTime.element
    );
    this.tHead.append(this.tr.element);
  }

  createThead() {
    this.tHead = document.createElement("thead");
    this.element.append(this.tHead);
    return this.tHead;
  }

  createTbody() {
    this.tBody = document.createElement("tbody");
    this.element.append(this.tBody);
    return this.tBody;
  }
}
