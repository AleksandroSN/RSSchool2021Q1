import { BaseComponent } from "../base-components";

const FLIP_CLASS = "card--flipped";

export class Card extends BaseComponent {
  private card: HTMLDivElement;

  isFlipped = false;

  constructor(readonly image: string) {
    super("div", ["card-container"]);

    this.card = document.createElement("div");
    this.card.classList.add("card", "card--flipped");
    this.element.append(this.card);

    this.card.insertAdjacentHTML(
      "afterbegin",
      `<div class="card__front" style="background-image: url(./assets/img/${image})"></div>
    <div class="card__back"></div>`
    );
  }

  flipToBack() {
    this.isFlipped = false;
    return this.flip(true);
  }

  flipToFront() {
    this.isFlipped = true;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((res) => {
      this.card.classList.toggle(FLIP_CLASS, isFront);
      this.card.addEventListener("transitionend", () => res(), {
        once: true,
      });
    });
  }
}
