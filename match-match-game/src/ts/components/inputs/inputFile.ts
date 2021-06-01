export class InputFile {
  inputLabel!: HTMLLabelElement;

  inputElement!: HTMLInputElement;

  inputFileReaderResult!: string | ArrayBuffer | null;

  constructor(private labelClass: string) {
    this.createInput();
    this.createImg(this.labelClass);
  }

  createImg(labelClass: string) {
    this.inputLabel = document.createElement("label");
    this.inputLabel.classList.add(labelClass);
    this.inputLabel.append(this.inputElement);
  }

  createInput() {
    this.inputElement = document.createElement("input");
    this.inputElement.classList.add("register__input-file");
    this.inputElement.type = "file";
  }

  addListener() {
    this.inputElement.addEventListener("change", () => {
      if (this.inputElement.files) {
        const file = this.inputElement.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          this.inputLabel.setAttribute(
            "style",
            `background-image: url(${reader.result})`
          );
          this.inputFileReaderResult = reader.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
}
