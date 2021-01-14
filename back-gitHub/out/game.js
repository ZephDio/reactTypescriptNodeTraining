"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const plate_1 = require("./plate");
class Game {
    constructor() {
        this.plate = new plate_1.Plate();
    }
    getState() {
        return {
            plate: this.plate.getState(),
        };
    }
}
exports.Game = Game;
