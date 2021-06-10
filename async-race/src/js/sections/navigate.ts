import { BaseComponent } from "../components/base-components";
import { Button } from "../components/buttons/buttons";

export class Navigate extends BaseComponent {
  private readonly toGarageBtn: Button;

  private readonly toWinnersBtn: Button;

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
  }
}
