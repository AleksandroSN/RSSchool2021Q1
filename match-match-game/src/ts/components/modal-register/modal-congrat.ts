import { Router } from "../../router/router";
import { addCongratText } from "../../templates/template";
import { BaseComponent } from "../base-components";
import { Btn } from "../buttons/buttons";

export class ModalCongrat extends BaseComponent {
  private readonly BtnSubmit: Btn;

  private readonly router: Router;

  constructor() {
    super("div", ["game__congrats"]);
    this.router = Router.getInstance();
    this.BtnSubmit = new Btn(["game__congrats-btn", "btn", "btn--blue"]);
    this.BtnSubmit.element.textContent = "OK";
    this.BtnSubmit.element.addEventListener("click", () => {
      this.clearModal();
      window.location.hash = "best-score";
      this.router.navigate();
    });
  }

  createModal(min: number, sec: number, result: number) {
    this.element.insertAdjacentHTML(
      "afterbegin",
      addCongratText(min, sec, result)
    );
    this.element.append(this.BtnSubmit.element);
  }

  clearModal() {
    this.element.innerHTML = "";
    this.element.remove();
  }
}
