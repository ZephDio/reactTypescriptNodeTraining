import { Plate } from "./plate";

export class Game {
  plate: Plate;

  constructor() {
    this.plate = new Plate();
  }

  getState() {
    return {
      plate: this.plate.getState(),
    };
  }
}
