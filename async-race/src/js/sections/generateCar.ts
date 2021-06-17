import { BaseComponent } from "../components/base-components";
import { Button } from "../components/buttons/buttons";
import { CarForm } from "../components/forms/carForm";

export class GenerateCarForm extends BaseComponent {
  readonly createCarForm: CarForm;

  readonly updateCarForm: CarForm;

  readonly generateCarBtn: Button;

  readonly raceBtn: Button;

  readonly resetBtn: Button;

  private generateBtnDiv!: HTMLElement;

  private static instance: GenerateCarForm;

  constructor() {
    super("section", ["generate"]);
    this.createCarForm = new CarForm(
      ["create-car"],
      "create-car__name",
      "create-car__name",
      false,
      "create-car__color",
      "create-car__color",
      ["btn"],
      "submit",
      "btn__other",
      "Create"
    );
    this.updateCarForm = new CarForm(
      ["update-car"],
      "update-car__name",
      "update-car__name",
      true,
      "update-car__color",
      "update-car__color",
      ["btn"],
      "submit",
      "btn__other",
      "Update"
    );
    this.generateCarBtn = new Button(
      ["generate__create-cars", "btn"],
      "button",
      "btn__other",
      "Generate cars"
    );
    this.raceBtn = new Button(
      ["generate__race", "btn"],
      "button",
      "btn__other",
      "Race"
    );
    this.resetBtn = new Button(
      ["generate__reset", "btn"],
      "button",
      "btn__reset",
      "Reset"
    );
    this.resetBtn.element.disabled = true;
    this.createDiv();
    this.element.append(
      this.createCarForm.element,
      this.updateCarForm.element,
      this.generateBtnDiv
    );
  }

  public static getInstance(): GenerateCarForm {
    if (!GenerateCarForm.instance) {
      GenerateCarForm.instance = new GenerateCarForm();
    }

    return GenerateCarForm.instance;
  }

  private createDiv() {
    this.generateBtnDiv = document.createElement("div");
    this.generateBtnDiv.classList.add("generate__btns");
    this.generateBtnDiv.append(
      this.generateCarBtn.element,
      this.raceBtn.element,
      this.resetBtn.element
    );
    return this.generateBtnDiv;
  }
}
