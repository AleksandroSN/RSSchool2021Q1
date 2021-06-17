import { BaseComponent } from "../base-components";

export class Th extends BaseComponent {
  constructor(classes: string[] = [], private readonly text: string) {
    super("th", classes);
    this.element.textContent = this.text;
  }

  clearLastchr() {
    const arrows = ["↑", "↓"];
    if (
      this.element.textContent?.slice(-1) === arrows[0] ||
      this.element.textContent?.slice(-1) === arrows[1]
    ) {
      this.element.textContent = this.element.textContent?.slice(
        0,
        -2
      ) as string;
    }
  }
}
