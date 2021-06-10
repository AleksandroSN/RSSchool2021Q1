import { BaseComponent } from "../base-components";
import { Button } from "../buttons/buttons";
import { Inputs } from "../inputs/inputs";

export class CarForm extends BaseComponent {
  private textInput: Inputs;

  private colorInput: Inputs;

  private btnForm: Button;

  constructor(
    formClass: string[],
    private readonly textInputName: string,
    private readonly textInputId: string,
    private readonly colorInputName: string,
    private readonly colorInputId: string,
    private readonly btnClass: string[],
    private readonly btnType: string,
    private readonly spanClass: string,
    private readonly spanText: string
  ) {
    super("form", formClass);

    this.textInput = new Inputs("text", this.textInputName, this.textInputId);
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
}
