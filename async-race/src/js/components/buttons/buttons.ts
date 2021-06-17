export class Button {
  readonly element: HTMLButtonElement;

  constructor(
    private readonly classes: string[] = [],
    private readonly type = "submit",
    private readonly spanClass = "",
    private readonly spanText = ""
  ) {
    this.element = document.createElement("button");
    this.element.classList.add(...this.classes);
    this.element.type = this.type;

    if (this.spanClass.length && this.spanText.length) {
      this.element.insertAdjacentHTML(
        "afterbegin",
        `<span class=${this.spanClass}>${this.spanText}</span>`
      );
    }
  }
}
