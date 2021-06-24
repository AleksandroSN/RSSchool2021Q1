import { BaseComponent } from '../base-components';

export class TableHeaderItem extends BaseComponent {
  constructor(classes: string[] = [], private readonly text: string) {
    super('th', classes);
    this.element.textContent = this.text;
  }

  clearLastchr() {
    const arrowUp = '↑';
    const arrowDown = '↓';
    if (
      this.element.textContent?.slice(-1) === arrowUp ||
      this.element.textContent?.slice(-1) === arrowDown
    ) {
      this.element.textContent = this.element.textContent?.slice(0, -2) as string;
    }
  }
}
