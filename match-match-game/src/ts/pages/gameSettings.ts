import { BaseComponent } from "../components/base-components";
import { gameSelectors } from "../templates/template";

export class GameSettings extends BaseComponent {
  private static instance: GameSettings;

  private readonly cardShirt: HTMLSelectElement;

  private readonly difficultGame: HTMLSelectElement;

  cardShirtValue: number | undefined;

  difficultGameValue: number | undefined;

  constructor() {
    super("div", ["game__settings"]);
    this.cardShirtValue = undefined;
    this.difficultGameValue = undefined;
    this.element.insertAdjacentHTML("afterbegin", gameSelectors);
    this.cardShirt = this.element.querySelector(
      "#game-cards-select"
    ) as HTMLSelectElement;
    this.cardShirt?.addEventListener("change", () => {
      this.cardShirtValue = this.cardShirt?.selectedIndex;
    });
    this.difficultGame = this.element.querySelector(
      "#game-difficult-select"
    ) as HTMLSelectElement;
    this.difficultGame?.addEventListener("change", () => {
      this.difficultGameValue = +this.difficultGame?.value;
    });
  }

  clearSelects() {
    this.cardShirt.selectedIndex = 0;
    this.difficultGame.selectedIndex = 0;
  }

  public static getInstance(): GameSettings {
    if (!GameSettings.instance) {
      GameSettings.instance = new GameSettings();
    }

    return GameSettings.instance;
  }
}
