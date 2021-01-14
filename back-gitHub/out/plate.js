"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plate = void 0;
class Plate {
    constructor() {
        this.pionList = [];
    }
    addPion(position, pion) {
        const newPion = { position: position, pion: pion };
        this.pionList.push(newPion);
    }
    movePionTo(positionAndPion, position) {
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
exports.Plate = Plate;
