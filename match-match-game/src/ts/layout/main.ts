import { BaseComponent } from "../components/base-components";

export class Main extends BaseComponent {
  readonly mainContainer: HTMLDivElement;

  constructor() {
    super("main", ["main"], "main");

    const mainWrapper = document.createElement("div");
    mainWrapper.classList.add("main__wrapper");
    this.element.append(mainWrapper);

    this.mainContainer = document.createElement("div");
    this.mainContainer.classList.add("main__container");
    mainWrapper.append(this.mainContainer);
  }
}
