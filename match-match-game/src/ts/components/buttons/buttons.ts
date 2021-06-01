export class Btn {
  readonly element: HTMLButtonElement;

  constructor(
    private readonly classes: string[] = [],
    private readonly type: string = "button"
  ) {
    this.element = document.createElement("button");
    this.element.classList.add(...this.classes);
    this.element.type = this.type;
  }
}
