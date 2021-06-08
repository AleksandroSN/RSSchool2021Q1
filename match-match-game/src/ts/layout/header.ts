import { BaseComponent } from "../components/base-components";
import { Btn } from "../components/buttons/buttons";
import { ModalReg } from "../components/modal-register/modal-register";
import { Overlay } from "../components/overlay/overlay";
import { IndexedDB } from "../database/indexedDB";
import { navListTemplate } from "../templates/template";

export class Header extends BaseComponent {
  headerContainer: HTMLDivElement | undefined;

  headerNavListItem: NodeList;

  btnReg: Btn;

  isRegister = false;

  private readonly overlay: Overlay;

  private readonly modalReg: ModalReg;

  private readonly indexedDB: IndexedDB;

  private static instance: Header;

  constructor() {
    super("header", ["header"], "header");
    this.overlay = new Overlay();
    this.indexedDB = IndexedDB.getInstance();
    this.modalReg = ModalReg.getInstance();
    this.btnReg = new Btn(["header__btn-register", "btn", "btn--light"]);
    this.btnReg.element.id = "playerReg";
    this.btnReg.element.textContent = "Register new player";
    this.btnReg.element.addEventListener("click", () => {
      if (!this.isRegister) {
        this.modalReg.element.append(this.overlay.element);
        this.modalReg.createModal();
        this.modalReg.addListenerOnModal();
        this.listenForm();
      }
    });
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

  listenForm(): void {
    this.modalReg.modalReg?.addEventListener("submit", () => {
      this.btnReg.element.textContent = "Start Game";
      // FIX
      setTimeout(() => {
        this.createAvatar(this.indexedDB.data.image as string);
      }, 1500);
      this.isRegister = true;
    });
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

    navList.insertAdjacentHTML("afterbegin", navListTemplate);
    this.headerNavListItem = this.element.querySelectorAll(
      ".header__nav-list-item"
    );
  }

  createBtn() {
    this.headerContainer?.append(this.btnReg.element);
  }

  // maybe separate ??
  createAvatar(IDBImage: string | ArrayBuffer | null) {
    let image: string | ArrayBuffer = "./assets/img/avatar.png";
    if (IDBImage) {
      image = IDBImage;
    }
    this.headerContainer?.insertAdjacentHTML(
      "beforeend",
      `<picture class="header__avatar">
    <img src="${image}" alt="avatar">
  </picture>
    `
    );
  }
}
