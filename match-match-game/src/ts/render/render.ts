import { ModalReg } from "../components/modal-register/modal-register";
import { Header } from "../layout/header";
import { Main } from "../layout/main";
import { GameSettings } from "../pages/gameSettings";

export class Render {
  readonly fragment: DocumentFragment;

  private readonly header: Header;

  private readonly modalReg: ModalReg;

  private readonly main: Main;

  private readonly gameSettings: GameSettings;

  private static instance: Render;

  private static bodyContainer = document.body;

  private arrNavListItems: [number, Node][] = [];

  private filteredArr: HTMLElement[] = [];

  constructor(private readonly rootElement: HTMLElement) {
    this.fragment = document.createDocumentFragment();

    this.modalReg = ModalReg.getInstance();

    this.header = Header.getInstance();
    this.header.createHeader();
    this.header.createLogo();
    this.header.createNav();
    this.header.createBtn();

    this.main = new Main();

    this.gameSettings = GameSettings.getInstance();

    for (const entry of this.header.headerNavListItem.entries()) {
      this.arrNavListItems.push(entry);
    }

    this.filteredArr = this.arrNavListItems
      .reduce((ac: unknown[], cur) => ac.concat(cur), [])
      .filter((y) => typeof y !== "number")
      .map((x) => x as HTMLElement);
  }

  public static getInstance(): Render {
    if (!Render.instance) {
      Render.instance = new Render(this.bodyContainer);
    }

    return Render.instance;
  }

  render(): void {
    this.fragment.append(this.modalReg.element);
    this.fragment.append(this.header.element);
    this.fragment.append(this.main.element);
    this.rootElement.append(this.fragment);
  }

  renderPage(page: HTMLElement, nameRoute = "") {
    this.main.mainContainer.innerHTML = "";
    if (this.header.btnReg.element.textContent === "Stop Game") {
      this.header.btnReg.element.textContent = "Start Game";
      this.gameSettings.cardShirtValue = undefined;
      this.gameSettings.difficultGameValue = undefined;
    }
    this.main.mainContainer.append(page);
    this.filteredArr.forEach((item) => {
      item.classList.remove("header__nav-list-item--active");
      if (item.dataset.link === nameRoute) {
        item.classList.add("header__nav-list-item--active");
      }
    });
  }
}
