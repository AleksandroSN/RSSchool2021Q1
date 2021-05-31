import { IndexedDB } from "../../database/indexedDB";
import { BaseComponent } from "../base-components";
import { Btn } from "../buttons/buttons";
import { InputForm } from "../inputs/inputs";
import { User } from "../user/user";

export class ModalReg extends BaseComponent {
  private readonly btnSubmit: Btn;

  private readonly btnCancel: Btn;

  private readonly inputFirstName: InputForm;

  private readonly inputLastName: InputForm;

  private readonly inputEmail: InputForm;

  modalReg: HTMLFormElement | undefined;

  private userData: User;

  private indexedDB: IndexedDB;

  private static instance: ModalReg;

  constructor() {
    super("div", ["modal"]);
    this.inputFirstName = new InputForm(
      "register__first-name",
      /^\p{Letter}{1,30}$/iu,
      "register__label-form",
      "reg-first-name",
      "First Name",
      "reg-first-name",
      "text",
      "Enter a First Name"
    );
    this.inputLastName = new InputForm(
      "register__last-name",
      /^\p{Letter}{1,30}$/iu,
      "register__label-form",
      "reg-last-name",
      "Last Name",
      "reg-last-name",
      "text",
      "Enter a Last Name"
    );
    this.inputEmail = new InputForm(
      "register__e-mail",
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "register__label-form",
      "reg-e-mail",
      "E-mail",
      "reg-e-mail",
      "email",
      "Enter a E-mail"
    );
    this.btnSubmit = new Btn("button", ["btn", "btn--blue"]);
    this.btnCancel = new Btn("button", ["btn", "btn--light"]);
    this.btnCancel.element.addEventListener("click", () => {
      this.clearModal();
    });
    this.indexedDB = IndexedDB.getInstance();
    this.userData = new User("", "", "", 0);
  }

  public static getInstance(): ModalReg {
    if (!ModalReg.instance) {
      ModalReg.instance = new ModalReg();
    }

    return ModalReg.instance;
  }

  createModal(): void {
    this.modalReg = document.createElement("form");
    this.modalReg.classList.add("register");
    this.element.append(this.modalReg);

    this.modalReg?.addEventListener("submit", (e: Event) => {
      this.userData = new User(
        this.inputFirstName.inputField.value,
        this.inputLastName.inputField.value,
        this.inputEmail.inputField.value,
        0
      );
      this.indexedDB.addRecord("user", this.userData.getUser());
      e.preventDefault();
      this.clearModal();
    });

    const h2 = document.createElement("h2");
    h2.classList.add("register__title");
    h2.textContent = "Register new Player";

    const regWrapper = document.createElement("div");
    regWrapper.classList.add("register__wrapper");

    this.modalReg.append(h2, regWrapper);

    const regWrapperLeft = document.createElement("div");
    regWrapperLeft.classList.add("register__wrapper--left");
    regWrapper.append(regWrapperLeft);

    regWrapperLeft.append(
      this.inputFirstName.element,
      this.inputLastName.element,
      this.inputEmail.element
    );

    const regWrapperRight = document.createElement("div");
    regWrapperRight.classList.add("register__wrapper--right");
    regWrapper.append(regWrapperRight);

    const avatarContainer = document.createElement("picture");
    avatarContainer.classList.add("register__avt-conainer");
    regWrapperRight.append(avatarContainer);

    const avatarImg = document.createElement("img");
    avatarImg.src = "./assets/img/avatar.png";
    avatarImg.alt = "avatar";
    avatarContainer.append(avatarImg);

    const regBtnContainer = document.createElement("div");
    regBtnContainer.classList.add("register__btn-container");
    regWrapperRight.append(regBtnContainer);

    this.btnSubmit.element.textContent = "Add User";
    this.btnCancel.element.textContent = "Cancel";
    regBtnContainer.append(this.btnSubmit.element, this.btnCancel.element);
  }

  clearModal() {
    this.modalReg?.reset();
    this.element.innerHTML = "";
  }
}
