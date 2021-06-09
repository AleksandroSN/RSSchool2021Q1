export class Button {
  readonly element: HTMLButtonElement

  constructor(
    private readonly classes: string[] = [],
    private readonly type = "submit",
    private readonly text = "GARAGE",
  ) {
    this.element = document.createElement("button");
    this.element.classList.add(...this.classes);
    this.element.type = this.type
    this.element.textContent = this.text;
  }
}