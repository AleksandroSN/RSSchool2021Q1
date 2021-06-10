import { BaseComponent } from "../components/base-components";
import { Button } from "../components/buttons/buttons";

export class Pagination extends BaseComponent {
  private readonly prevBtn: Button;

  private readonly nextBtn: Button;

  constructor() {
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
    this.element.append(this.prevBtn.element, this.nextBtn.element);
  }
}
