import { color } from "./color";

export class Pion {
  private color: color;

  constructor(couleur: color) {
    this.color = couleur;
  }

  getColor() {
    return this.color;
  }
}
