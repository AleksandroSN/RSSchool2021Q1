export class Counters {
  counter!: HTMLElement;

  counterSpan!: HTMLSpanElement;

  constructor(
    private readonly mainClass: string,
    private readonly numberCount: string,
    private readonly mainText: string
  ) {
    this.createCounter(this.mainClass, this.mainText, this.numberCount);
  }

  private createCounter(
    mainClass: string,
    text: string,
    counter: string
  ): HTMLElement {
    this.counter = document.createElement("p");
    this.counter.classList.add(mainClass);
    this.counter.textContent = text;
    this.counter.append(this.createCounterSpan(counter));
    return this.counter;
  }

  private createCounterSpan(count: string): HTMLSpanElement {
    this.counterSpan = document.createElement("span");
    this.counterSpan.classList.add("count-main");
    this.counterSpan.textContent = count;
    return this.counterSpan;
  }
}
