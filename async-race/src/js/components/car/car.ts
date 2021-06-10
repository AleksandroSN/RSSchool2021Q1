import { createCar } from "../../templates/template";
import { BaseComponent } from "../base-components";
import { Button } from "../buttons/buttons";

export class Car extends BaseComponent {
  private readonly selectBtn: Button;

  private readonly removeBtn: Button;

  constructor() {
    super("div", ["garage__car"]);
    this.selectBtn = new Button(
      ["garage__select", "btn"],
      "button",
      "btn__other",
      "Select"
    );
    this.removeBtn = new Button(
      ["garage__remove", "btn"],
      "button",
      "btn__other",
      "Remove"
    );
    this.element.append(this.selectBtn.element, this.removeBtn.element);
    this.createCar();
  }

  createCar() {
    this.element.insertAdjacentHTML("beforeend", createCar("Tesla", "FFFFFF"));
  }
}
