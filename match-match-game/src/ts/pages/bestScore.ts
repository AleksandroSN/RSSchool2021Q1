import { BaseComponent } from "../components/base-components";
import { IndexedDB } from "../database/indexedDB";

export class BestScore extends BaseComponent {
  private indexedDB: IndexedDB;

  private bestScoreWrapper!: HTMLDivElement;

  private players: Array<{
    name: string;
    lastName: string;
    email: string;
    score: number;
  }>;

  private name: string;

  private lastName: string;

  private email: string;

  private score: number;

  constructor() {
    super("div", ["best__score"]);
    this.indexedDB = IndexedDB.getInstance();
    this.players = [];
    this.name = "";
    this.lastName = "";
    this.email = "";
    this.score = 0;
    this.element.insertAdjacentHTML(
      "afterbegin",
      `
    <h2 class="best__score-title">Best players</h2>`
    );
    this.createWrapper();
  }

  async getPlayerData() {
    return new Promise((res) => {
      this.players = this.indexedDB.allRecors;
      res(this.fillData());
    });
  }

  fillData() {
    this.bestScoreWrapper.innerHTML = "";
    this.players.forEach((player) => {
      this.name = player.name;
      this.lastName = player.lastName;
      this.email = player.email;
      this.score = player.score;
      this.createPlayer();
    });
  }

  createWrapper() {
    this.bestScoreWrapper = document.createElement("div") as HTMLDivElement;
    this.bestScoreWrapper.classList.add("best__score-wrapper");
    this.element.append(this.bestScoreWrapper);
  }

  createPlayer() {
    const bestScoreResult = document.createElement("div");
    bestScoreResult.classList.add("best__score-result");
    this.bestScoreWrapper.append(bestScoreResult);

    bestScoreResult.insertAdjacentHTML(
      "afterbegin",
      `<picture class="best__score-avatar">
    <img src="./assets/img/player1.jpg" alt="player1">
  </picture>
  <div class="best__score-player">
    <p class="best__score-player-name">${this.name} ${this.lastName}</p>
    <p class="best__score-player-e-mail">${this.email}</p>
  </div>
  <div class="best__score-score">
    <p class="best__score-text">Score: <span class="best__score-numbers">${this.score}</span></p>
  </div>`
    );
  }
}
