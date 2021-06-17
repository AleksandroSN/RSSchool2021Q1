import { Button } from "../buttons/buttons";
import { Inputs } from "../inputs/inputs";

export class CarForm {
  readonly element: HTMLFormElement;

  textInput: Inputs;

  colorInput: Inputs;

  private btnForm: Button;

  textInputValue!: string;

  colorInputValue!: string;

  constructor(
    formClass: string[],
    private readonly textInputName: string,
    private readonly textInputId: string,
    private readonly textInputDisabled: boolean,
    private readonly colorInputName: string,
    private readonly colorInputId: string,
    private readonly btnClass: string[],
    private readonly btnType: string,
    private readonly spanClass: string,
    private readonly spanText: string
  ) {
    this.element = document.createElement("form");
    this.element.classList.add(...formClass);

    this.textInput = new Inputs(
      "text",
      this.textInputName,
      this.textInputId,
      this.textInputDisabled
    );
    this.textInput.element.value = "KOPEIKA";
    this.colorInput = new Inputs(
      "color",
      this.colorInputName,
      this.colorInputId
    );
    this.btnForm = new Button(
      this.btnClass,
      this.btnType,
      this.spanClass,
      this.spanText
    );
    this.element.append(
      this.textInput.element,
      this.colorInput.element,
      this.btnForm.element
    );
  }

  getInputsValue() {
    this.textInputValue = this.textInput.element.value;
    this.colorInputValue = this.colorInput.element.value;
    return {
      name: this.textInputValue,
      color: this.colorInputValue,
    };
  }
}
