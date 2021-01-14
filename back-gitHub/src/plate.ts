import { Pion } from "./pion";
import { position } from "./position";

interface positionAndPion {
  position: position;
  pion: Pion;
}

export class Plate {
  private pionList: positionAndPion[];

  constructor() {
    this.pionList = [];
  }

  addPion(position: position, pion: Pion) {
    const newPion: positionAndPion = { position: position, pion: pion };
    this.pionList.push(newPion);
  }

  movePionTo(positionAndPion: positionAndPion, position: position) {
    positionAndPion.position = position;
  }

  getState() {
    const result = [];
    for (const posAndPion of this.pionList) {
      result.push({
        x: posAndPion.position.x,
        y: posAndPion.position.y,
        color: posAndPion.pion.getColor(),
      });
    }
    return result;
  }
}
