import { BaseComponent } from "../base-components";

export class InputForm extends BaseComponent {
  private inputCheckboxWrapper: HTMLLabelElement;

  inputField: HTMLInputElement;

  inputCheckbox: HTMLInputElement;

  constructor(
    public readonly className: string,
    private readonly regExp: RegExp,
    private readonly labelClass: string,
    private readonly labelFor = "",
    private readonly labelText = "",
    private readonly inputName: string,
    private readonly inputType = "text",
    private readonly inputPlaceholder = ""
  ) {
    super("div", [className]);
    this.createLabel(this.labelClass, this.labelFor, this.labelText);
    this.inputField = document.createElement("input") as HTMLInputElement;
    this.inputCheckbox = document.createElement("input") as HTMLInputElement;
    this.createInput(this.inputName, this.inputType, this.inputPlaceholder);
    this.createLabel("register__input-wrapper");
    this.inputCheckboxWrapper = this.element.querySelector(
      ".register__input-wrapper"
    ) as HTMLLabelElement;
    this.createCheckbox();
    this.createSpan();
    this.inputField.addEventListener("input", () => {
      this.inputHandler();
    });
  }

  createLabel(labelClass: string, labelFor = "", labelText = "") {
    const label = document.createElement("label");
    label.textContent = labelText;
    label.classList.add(labelClass);
    label.setAttribute("for", labelFor);
    this.element.append(label);
  }

  createInput(inputName: string, inputType: string, inputPlaceholder = "") {
    this.inputField.classList.add("register__input");
    this.inputField.type = inputType;
    this.inputField.name = inputName;
    this.inputField.placeholder = inputPlaceholder;
    this.inputField.required = true;
    this.element.append(this.inputField);
  }

  createCheckbox() {
    this.inputCheckbox.classList.add("register__input-checkbox");
    this.inputCheckbox.type = "checkbox";
    this.inputCheckbox.disabled = true;
    this.inputCheckboxWrapper.append(this.inputCheckbox);
  }

  createSpan() {
    const span = document.createElement("span");
    span.classList.add("register__input-checkbox-checkmark");
    this.inputCheckboxWrapper.append(span);
  }

  inputHandler() {
    if (
      this.inputField.validity.valid &&
      this.regExp.test(this.inputField.value)
    ) {
      this.inputCheckbox.checked = true;
    } else this.inputCheckbox.checked = false;
  }
}
