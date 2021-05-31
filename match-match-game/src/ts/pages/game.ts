import { BaseComponent } from "../components/base-components";
import { Btn } from "../components/buttons/buttons";
import { CardsField } from "../components/cards-field/cards-field";
import { Card } from "../components/cards/cards";
import { Timer } from "../components/timer/timer";
import { IndexedDB } from "../database/indexedDB";
import { Router } from "../router/router";
import { delay } from "../shared/delay";

const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
  private static instance: Game;

  private readonly timer: Timer;

  private indexedDB: IndexedDB;

  private readonly cardsField: CardsField;

  private readonly BtnSubmit: Btn;

  private readonly router: Router;

  private activeCard?: Card;

  private isAnimation = false;

  private countCards: number;

  private successMatch: number;

  private wrongMatch: number;

  constructor() {
    super("div", ["game"]);
    this.indexedDB = IndexedDB.getInstance();
    this.timer = new Timer();
    this.router = Router.getInstance();
    this.cardsField = new CardsField();
    this.BtnSubmit = new Btn("button", [
      "game__congrats-btn",
      "btn",
      "btn--blue",
    ]);
    this.BtnSubmit.element.textContent = "OK";
    this.BtnSubmit.element.addEventListener("click", () => {
      this.clearModal();
      window.location.hash = "best-score";
      this.router.navigate();
    });
    this.countCards = 0;
    this.successMatch = 0;
    this.wrongMatch = 0;
    this.element.append(this.timer.element, this.cardsField.element);
  }

  public static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }

    return Game.instance;
  }

  newGame(images: string[], size: number) {
    this.cardsField.clear();
    this.timer.stopTimer();
    this.timer.clearTimer();
    this.indexedDB.getRecord("user");
    const root = document.documentElement;
    root.style.setProperty("--grid-rows", `${size / Math.sqrt(size)}`);
    root.style.setProperty("--grid-cols", `${size / Math.sqrt(size)}`);
    const gameFieldSize = [];
    let indexHelper = 0;
    for (let i = 0; i < size / 2; i++) {
      gameFieldSize.push(images[indexHelper]);
      indexHelper += 1;
      if (indexHelper === images.length) {
        indexHelper = 0;
      }
    }
    
    const cards = gameFieldSize
      .concat(gameFieldSize)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);
    this.countCards = cards.length;

    cards.forEach((card) =>
      card.element.addEventListener("click", () => {
        this.cardHandler(card);
      })
    );

    this.cardsField.addCards(cards);
    setTimeout(() => {
      this.timer.startTimer();
    }, 3000);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToBack();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image === card.image) {
      this.activeCard.element.classList.add("card--success");
      card.element.classList.add("card--success");
      this.countCards -= 2;
      this.successMatch += 1;
      if (this.countCards === 0) {
        const playerData = this.indexedDB.data;
        playerData.score = this.outputResult();
        this.indexedDB.updateRecord("user", playerData);
        this.indexedDB.getAllRecords('user','rating');
        this.createModal(this.timer.minutes, this.timer.seconds);
        this.successMatch = 0;
        this.wrongMatch = 0;
        this.timer.stopTimer();
      }
    }

    if (this.activeCard.image !== card.image) {
      this.wrongMatch += 1;
      this.activeCard.element.classList.add("card--wrong");
      card.element.classList.add("card--wrong");
      await delay(FLIP_DELAY);
      this.activeCard.element.classList.remove("card--wrong");
      card.element.classList.remove("card--wrong");
      await Promise.all([this.activeCard.flipToFront(), card.flipToFront()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  createModal(min: number, sec: number) {
    const gameCongrats = document.createElement("div");
    gameCongrats.classList.add("game__congrats");
    this.element.append(gameCongrats);

    gameCongrats.insertAdjacentHTML(
      "afterbegin",
      `
      <p class="game__congrats-text">Congratulations! You successfully found all matches on <span
      class="game__congrats-timer">${min} minutes ${sec} seconds </span>.</p> Your score ${this.outputResult()}`
    );
    gameCongrats.append(this.BtnSubmit.element);
  }

  clearModal() {
    this.element.lastElementChild?.remove();
  }

  outputResult() {
    const result =
      (this.successMatch - this.wrongMatch) * 100 -
      this.timer.seconsForScore * 10;
    return result < 0 ? 0 : result;
  }
}
