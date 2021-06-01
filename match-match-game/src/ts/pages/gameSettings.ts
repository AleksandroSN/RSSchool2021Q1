import { BaseComponent } from "../components/base-components";

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
    this.element.insertAdjacentHTML(
      "afterbegin",
      `<div class="game__settings-wrapper">
    <label for="game-cards" class="game__settings-title">Game Cards</label>
    <select name="game-cards" id="game-cards-select" class="game__settings-select-cards">
      <option value="" disabled selected>Select game cards type</option>
      <option value="0">kitty</option>
      <option value="1">sport</option>
      <option value="2">computer</option>
    </select>
  </div>
  <div class="game__settings-wrapper">
    <label for="game-difficult" class="game__settings-title">Difficulty</label>
    <select name="game-difficult" id="game-difficult-select" class="game__settings-select-difficult">
      <option value="" disabled selected>Select field size</option>
      <option value="4">2 x 2</option>
      <option value="16">4 x 4</option>
      <option value="36">6 x 6</option>
    </select>
  </div>`
    );
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
