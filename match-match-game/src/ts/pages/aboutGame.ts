import { BaseComponent } from "../components/base-components";

export class AboutGame extends BaseComponent {
  constructor() {
    super("div", ["about__game"]);
    this.element.insertAdjacentHTML(
      "afterbegin",
      `
    <h2 class="about__game-title">How to play?</h2>
          <div class="about__game-grid">
            <div class="about__game-register--left">
              <span class="about__game-number">1</span>
              <p class="about__game-text">Register new player in game</p>
            </div>
            <div class="about__game-register--right">
              <picture class="about__game-picture">
                <img src="./assets/img/register-form.jpg" alt="form example">
              </picture>
            </div>
            <div class="about__game-settings--left">
              <span class="about__game-number">2</span>
              <p class="about__game-text">Configure your game settings</p>
            </div>
            <div class="about__game-settings--right">
              <picture class="about__game-picture">
                <img src="./assets/img/game-settings.jpg" alt="form example">
              </picture>
            </div>
            <div class="about__game-start--left">
              <span class="about__game-number">3</span>
              <p class="about__game-text">Start you new game! Remember card positions and match it before times up.</p>
            </div>
            <div class="about__game-start--right">
              <picture class="about__game-picture">
                <img src="./assets/img/cards-example.jpg" alt="form example">
              </picture>
            </div>
          </div>`
    );
  }
}
