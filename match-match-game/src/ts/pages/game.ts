import { BaseComponent } from "../components/base-components";
import { CardsField } from "../components/cards-field/cards-field";
import { Card } from "../components/cards/cards";
import { ModalCongrat } from "../components/modal-register/modal-congrat";
import { Timer } from "../components/timer/timer";
import { IndexedDB } from "../database/indexedDB";
import { delay } from "../shared/delay";

const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
  private static instance: Game;

  private readonly timer: Timer;

  private indexedDB: IndexedDB;

  private readonly cardsField: CardsField;

  private readonly modalCongrat: ModalCongrat;

  private activeCard?: Card;

  private isAnimation = false;

  private countCards: number;

  private successMatch: number;

  private wrongMatch: number;

  private gameTimers!: ReturnType<typeof setTimeout>;

  constructor() {
    super("div", ["game"]);
    this.indexedDB = IndexedDB.getInstance();
    this.timer = new Timer();
    this.cardsField = new CardsField();
    this.modalCongrat = new ModalCongrat();
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
    clearTimeout(this.gameTimers);
    this.cardsField.clear();
    this.timer.stopTimer();
    this.timer.clearTimer();
    this.timer.countDownTimer();
    setTimeout(() => {
      this.indexedDB.getRecord("user");
    }, 500);
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
    this.gameTimers = setTimeout(() => {
      this.timer.stopTimer();
      this.timer.startTimer();
    }, 30000);
  }

  stopGame() {
    const playerData = this.indexedDB.data;
    playerData.score = this.outputResult();
    this.indexedDB.updateRecord("user", playerData);
    setTimeout(() => {
      this.indexedDB.getAllRecords("user", "rating");
    }, 500);
    this.element.append(this.modalCongrat.element);
    this.modalCongrat.createModal(
      this.timer.minutes,
      this.timer.seconds,
      this.outputResult()
    );
    this.successMatch = 0;
    this.wrongMatch = 0;
    this.timer.stopTimer();
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
      this.matchingCard(card);
      if (this.countCards === 0) {
        this.stopGame();
      }
    }

    if (this.activeCard.image !== card.image) {
      await this.dismatchingCard(card);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  matchingCard(card: Card) {
    this.activeCard!.element.classList.add("card--success");
    card.element.classList.add("card--success");
    this.countCards -= 2;
    this.successMatch += 1;
  }

  async dismatchingCard(card: Card) {
    this.wrongMatch += 1;
    this.activeCard!.element.classList.add("card--wrong");
    card.element.classList.add("card--wrong");
    await delay(FLIP_DELAY);
    this.activeCard!.element.classList.remove("card--wrong");
    card.element.classList.remove("card--wrong");
    await Promise.all([this.activeCard!.flipToFront(), card.flipToFront()]);
  }

  outputResult() {
    const result =
      (this.successMatch - this.wrongMatch) * 100 -
      this.timer.seconsForScore * 10;
    return result < 0 ? 0 : result;
  }
}
