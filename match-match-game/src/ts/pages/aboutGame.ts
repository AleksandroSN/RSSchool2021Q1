import { BaseComponent } from "../components/base-components";
import { aboutGameMarkUp } from "../templates/template";

export class AboutGame extends BaseComponent {
  constructor() {
    super("div", ["about__game"]);
    this.element.insertAdjacentHTML("afterbegin", aboutGameMarkUp);
  }
}
