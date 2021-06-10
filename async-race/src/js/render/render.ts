import { Garage } from "../pages/garage";
import { Navigate } from "../sections/navigate";
import { Pagination } from "../sections/pagination";

export class Render {
  readonly fragment: DocumentFragment;

  private readonly navigate: Navigate;

  private readonly garage: Garage;

  private readonly pagination: Pagination;

  constructor(private readonly rootElement: HTMLElement) {
    this.fragment = document.createDocumentFragment();

    this.navigate = new Navigate();

    this.garage = new Garage();

    this.pagination = new Pagination();

    this.fragment.append(
      this.navigate.element,
      this.garage.element,
      this.pagination.element
    );

    this.rootElement.append(this.fragment);
  }
}
