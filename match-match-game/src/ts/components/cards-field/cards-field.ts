import { BaseComponent } from "../base-components";
import { Card } from "../cards/cards";

const SHOW_TIME = 30;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super("div", ["game__field"]);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = "";
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.append(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToFront());
    }, SHOW_TIME * 100);
  }
}
