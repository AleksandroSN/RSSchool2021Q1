import { BaseComponent } from "../components/base-components";
import { GenerateCar } from "../sections/generateCar";
import { Race } from "../sections/race";

export class Garage extends BaseComponent {
  private readonly generateSection: GenerateCar;

  private readonly raceSection: Race;

  constructor() {
    super("main", ["main"]);
    this.generateSection = new GenerateCar();
    this.raceSection = new Race();
    this.element.append(this.generateSection.element, this.raceSection.element);
  }
}
