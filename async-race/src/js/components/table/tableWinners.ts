import { BaseComponent } from "../base-components";
import { TableHeaderItem } from "./createTableHeaderItem";
import { CreateTableRow } from "./createTableRow";

export class TableWinners extends BaseComponent {
  private tHead!: HTMLTableSectionElement;

  private tr!: CreateTableRow;

  tBody!: HTMLElement;

  readonly thId: TableHeaderItem;

  private readonly thCar: TableHeaderItem;

  private readonly thName: TableHeaderItem;

  readonly thWins: TableHeaderItem;

  readonly thTime: TableHeaderItem;

  constructor() {
    super("table", ["table"]);
    this.createThead();
    this.createTbody();
    this.thId = new TableHeaderItem(["order-by-id"], "Number");
    this.thCar = new TableHeaderItem(["order-by-car"], "Car");
    this.thName = new TableHeaderItem(["order-by-carname"], "Name");
    this.thWins = new TableHeaderItem(["order-by-wins"], "Wins");
    this.thTime = new TableHeaderItem(["order-by-time"], "Best time (seconds)");
    this.tr = new CreateTableRow();
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

  removeTbody() {
    while (this.tBody.firstChild) {
      this.tBody.removeChild(this.tBody.firstChild);
    }
  }
}
