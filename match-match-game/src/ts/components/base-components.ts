export class BaseComponent {
  readonly element: HTMLElement;

  constructor(
    tag: keyof HTMLElementTagNameMap = "div",
    classes: string[] = [],
    idEl = ""
  ) {
    this.element = document.createElement(tag);
    this.element.classList.add(...classes);

    if (idEl) {
      this.element.id = idEl;
    }
  }
}
