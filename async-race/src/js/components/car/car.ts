import { BaseComponent } from "../base-components";
import { Button } from "../buttons/buttons";
import { carMarkup } from "../../templates/template";
import { carRoute } from "../../utils/utils";
import { animationState } from "../../interfaces-and-types/interfaces";
import { drive, startEngine, stopEngine } from "../../api/car-api";

export class Car extends BaseComponent {
  readonly startBtn: Button;

  readonly stopBtn: Button;

  carDiv!: HTMLDivElement;

  private start: number | null = null;

  state!: animationState;

  constructor(private readonly color: string) {
    super("div", ["garage__car"]);
    this.startBtn = new Button(["btn__start"], "button");
    this.stopBtn = new Button(["btn__stop"], "button");
    this.startBtn.element.textContent = "D";
    this.stopBtn.element.textContent = "P";
    this.stopBtn.element.disabled = true;
    this.element.append(this.startBtn.element, this.stopBtn.element);

    this.listenerStartBtn();
    this.listenerStopBtn();
  }

  private listenerStartBtn() {
    this.startBtn.element.addEventListener("click", () => {
      this.startDriving(Number(this.carDiv.id));
    });
  }

  private listenerStopBtn() {
    this.stopBtn.element.addEventListener("click", async () => {
      this.stopDriving();
    });
  }

  createCar(id: number) {
    this.carDiv = document.createElement("div");
    this.carDiv.classList.add("car");
    this.carDiv.id = String(id);
    this.carDiv.insertAdjacentHTML("afterbegin", carMarkup(this.color));
    this.element.append(this.carDiv);
    return this.carDiv;
  }

  async startDriving(id: number) {
    this.stopBtn.element.disabled = false;
    this.startBtn.element.disabled = true;
    const { velocity, distance } = await startEngine(id);
    const time = Math.round(distance / velocity);
    const routeCar = carRoute(this.carDiv);
    this.moveCar(routeCar, time);
    const { success } = await drive(Number(id));
    if (!success) window.cancelAnimationFrame(this.state);
    return { success, time, id };
  }

  async stopDriving() {
    await stopEngine(Number(this.carDiv.id));
    this.carDiv.style.transform = `translateX(0px)`;
    this.startBtn.element.disabled = false;
    this.stopBtn.element.disabled = true;
    window.cancelAnimationFrame(this.state);
  }

  moveCar(distance: number, animationTime: number) {
    this.start = null;
    const step = (timestamp: number) => {
      if (!this.start) this.start = timestamp;
      const time = timestamp - this.start;
      const progress = Math.round(time * (distance / animationTime));
      if (progress < distance) {
        this.carDiv.style.transform = `translateX(${Math.min(
          progress,
          distance
        )}px)`;
        this.state = window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(this.state);
      }
    };
    this.state = window.requestAnimationFrame(step);
    return this.state;
  }
}
