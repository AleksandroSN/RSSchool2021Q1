import { BaseComponent } from "../base-components";
import { Card } from "../cards/cards";

const SHOW_TIME = 30;

export class CardsField extends BaseComponent {
  private timeoutToFlip!: ReturnType<typeof setTimeout>;

  private cards: Card[] = [];

  constructor() {
    super("div", ["game__field"]);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = "";
    clearTimeout(this.timeoutToFlip);
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.append(card.element));
    this.timeoutToFlip = setTimeout(() => {
      this.cards.forEach((card) => card.flipToFront());
    }, SHOW_TIME * 1000);
  }
}
