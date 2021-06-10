export class Inputs {
  readonly element: HTMLInputElement;

  constructor(
    private readonly type: string,
    private readonly name: string,
    private readonly id: string
  ) {
    this.element = document.createElement("input");
    this.element.type = this.type;
    this.element.name = this.name;
    this.element.id = this.id;
    this.addListener();
  }

  private addListener() {
    this.element.addEventListener("change", () => {
      console.log(this.element.value);
    });
  }
}
