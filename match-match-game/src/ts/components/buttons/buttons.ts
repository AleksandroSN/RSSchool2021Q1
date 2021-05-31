export class Btn {
  readonly element: HTMLElement;

  constructor(
    btnTag: keyof HTMLElementTagNameMap = "button",
    classes: string[] = []
  ) {
    this.element = document.createElement(btnTag);
    this.element.classList.add(...classes);
  }
}
