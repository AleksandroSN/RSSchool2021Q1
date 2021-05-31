import { BaseComponent } from "../components/base-components";
import { Btn } from "../components/buttons/buttons";
import { ModalReg } from "../components/modal-register/modal-register";
import { Overlay } from "../components/overlay/overlay";

export class Header extends BaseComponent {
  headerContainer: HTMLDivElement | undefined;

  headerNavListItem: NodeList;

  btnReg: Btn;

  private readonly overlay: Overlay;

  private readonly modalReg: ModalReg;

  private static instance: Header;

  constructor() {
    super("header", ["header"], "header");
    this.overlay = new Overlay();
    this.modalReg = ModalReg.getInstance();
    this.btnReg = new Btn("button", [
      "header__btn-register",
      "btn",
      "btn--light",
    ]);
    this.btnReg.element.id = "playerReg";
    this.btnReg.element.textContent = "Register new player";
    this.btnReg.element.addEventListener(
      "click",
      () => {
        this.modalReg.element.append(this.overlay.element);
        this.modalReg.createModal();
        this.modalReg.modalReg?.addEventListener("submit", () => {
          this.btnReg.element.textContent = "Start Game";
          this.createAvatar();
        });
      },
      { once: true }
    );
    this.headerNavListItem = this.element.querySelectorAll(
      ".header__nav-list-item"
    );
  }

  public static getInstance(): Header {
    if (!Header.instance) {
      Header.instance = new Header();
    }

    return Header.instance;
  }

  createHeader(): void {
    const headerWrapper = document.createElement("div");
    headerWrapper.classList.add("header__wrapper");
    this.element.appendChild(headerWrapper);

    this.headerContainer = document.createElement("div");
    this.headerContainer.classList.add("header__container");
    headerWrapper.appendChild(this.headerContainer);
  }

  createLogo(): void {
    const logoLink = document.createElement("a");
    logoLink.classList.add("header__logo");
    logoLink.href = "./app.html";
    this.headerContainer?.append(logoLink);

    logoLink.insertAdjacentHTML(
      "afterbegin",
      `<span class="header__logo-item">Match</span><span
    class="header__logo-item">Match</span>`
    );
  }

  createNav(): void {
    const nav = document.createElement("nav");
    nav.classList.add("header__nav");
    this.headerContainer?.append(nav);

    const navList = document.createElement("ul");
    navList.classList.add("header__nav-list");
    nav.append(navList);

    navList.insertAdjacentHTML(
      "afterbegin",
      `
    <li class="header__nav-list-item" data-link="about">
              <a href="#about" class="header__nav-link">
                <picture class="header__nav-list-item-img"><img src="./assets/icons/question.svg" alt="about game">
                </picture>About Game
              </a>
            </li>
            <li class="header__nav-list-item" data-link="best-score">
              <a href="#best-score" class="header__nav-link">
                <picture class="header__nav-list-item-img header__nav-list-item-img--score"><img src="./assets/icons/star.svg" alt="best score"></picture>Best
                Score
              </a>
            </li>
            <li class="header__nav-list-item" data-link="game-settings">
              <a href="#game-settings" class="header__nav-link">
                <picture class="header__nav-list-item-img"><img src="./assets/icons/settings.svg" alt="game Settings">
                </picture>
                Game Settings
              </a>
            </li>`
    );
    this.headerNavListItem = this.element.querySelectorAll(
      ".header__nav-list-item"
    );
  }

  createBtn() {
    this.headerContainer?.append(this.btnReg.element);
  }

  createAvatar() {
    this.headerContainer?.insertAdjacentHTML(
      "beforeend",
      `<picture class="header__avatar">
    <img src="./assets/img/avatar-login.jpg" alt="avatar">
  </picture>
    `
    );
  }
}
