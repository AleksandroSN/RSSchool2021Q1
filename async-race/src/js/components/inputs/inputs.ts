export class Inputs {
  readonly element: HTMLInputElement;

  constructor(
    private readonly type: string,
    private readonly name: string,
    private readonly id: string,
    private readonly disabled = false
  ) {
    this.element = document.createElement("input");
    this.element.type = this.type;
    this.element.name = this.name;
    this.element.id = this.id;
    this.element.disabled = this.disabled;
    this.element.required = true;
  }
}
