import { BaseComponent } from "../base-components";

const devideZeros = (time: number) => {
  if (time < 10) {
    return `0${time}`;
  }
  return `${time}`;
};

export class Timer extends BaseComponent {
  private difference: number;

  private startTime: number;

  private updatedTime: number;

  seconsForScore: number;

  seconds: number;

  minutes: number;

  private intervalTimer!: ReturnType<typeof setTimeout>;

  constructor() {
    super("div", ["game__timer"]);
    this.difference = 0;
    this.startTime = 0;
    this.updatedTime = 0;
    this.seconsForScore = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.element.insertAdjacentHTML(
      "afterbegin",
      `<span class="game__timer-minutes">00</span>:<span class="game__timer-seconds">00</span>`
    );
  }

  clearTimer() {
    this.element.innerHTML = `<span class="game__timer-minutes">00</span>:<span class="game__timer-seconds">00</span>`;
  }

  startTimer() {
    this.startTime = new Date().getTime();
    this.intervalTimer = setInterval(() => {
      this.updatedTime = new Date().getTime();
      this.difference = this.updatedTime - this.startTime;
      this.updateTimer();
      this.seconsForScore += 1;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalTimer);
    this.difference = 0;
    this.startTime = 0;
    this.updatedTime = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.seconsForScore = 0;
  }

  updateTimer() {
    const tempTime: number = this.difference;
    this.seconds = Math.floor((tempTime % (1000 * 60)) / 1000);
    this.minutes = Math.floor((tempTime % (1000 * 60 * 60)) / (1000 * 60));
    this.element.innerHTML = `<span class="game__timer-minutes">${devideZeros(
      this.minutes
    )}</span>
                              :
                              <span class="game__timer-seconds">${devideZeros(
    this.seconds
  )}</span>`;
  }
}
