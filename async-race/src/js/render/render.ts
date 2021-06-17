import { Navigate } from "../sections/navigate";

export class Render {
  readonly fragment: DocumentFragment;

  private readonly navigate: Navigate;

  constructor(private readonly rootElement: HTMLElement) {
    this.fragment = document.createDocumentFragment();
    this.navigate = new Navigate();
    this.renderPage();
    this.listenBtnRenderGarage();
    this.listenBtnRenderWinners();
  }

  renderPage() {
    this.fragment.append(
      this.navigate.element,
      this.navigate.currentPage.element,
      this.navigate.currentPagination.element
    );
    this.rootElement.append(this.fragment);
  }

  listenBtnRenderGarage() {
    this.navigate.toGarageBtn.element.addEventListener("click", () => {
      this.navigate.winnersPage.element.remove();
      this.navigate.paginationWinners.element.remove();
      this.navigate.currentPage = this.navigate.garagePage;
      this.navigate.currentPagination = this.navigate.paginationGarage;
      this.renderPage();
    });
  }

  listenBtnRenderWinners() {
    this.navigate.toWinnersBtn.element.addEventListener("click", async () => {
      const currPage = localStorage.getItem("winnersPage") as string;
      await this.navigate.winnersPage.createWinners(
        Number(currPage),
        "wins",
        "DESC"
      );
      this.navigate.winnersPage.getMarkup();
      this.navigate.garagePage.element.remove();
      this.navigate.paginationGarage.element.remove();
      this.navigate.currentPage = this.navigate.winnersPage;
      this.navigate.currentPagination = this.navigate.paginationWinners;
      this.renderPage();
    });
  }
}
