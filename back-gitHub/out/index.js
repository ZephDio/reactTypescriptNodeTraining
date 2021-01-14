"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const generalFunction_1 = require("./generalFunction");
const game_1 = require("./game");
const pion_1 = require("./pion");
const app = express_1.default();
const server = http_1.default.createServer(app);
app.use(express_1.default.json());
app.use(cors_1.default());
app.post("/submitPion", (req, res) => {
    console.log("salut tes bonne");
    if (generalFunction_1.verify(req)) {
        game.plate.addPion({ x: req.body.x, y: req.body.y }, new pion_1.Pion(req.body.color));
        console.log(game.plate.getState());
        res.write(JSON.stringify(game.getState()));
        res.end();
    }
    else {
        res.write("Nope Nigga");
        res.end();
    }
});
server.on("connection", (socket) => {
    socket.emit("gamestate", game.getState());
});
app.get("/state", (req, res) => {
    res.write(JSON.stringify(game.getState()));
});
app.use((req, res, next) => {
    // redirect all requests that have not been handled by the previous middleware to /
    // tells the navigator to go to / directly
    // the navigator rerequests the server and the request get intercepted by the first middleware
    res.redirect("/");
});
server.listen(3000, () => {
    console.log("listening to port: 3000");
});
const game = new game_1.Game();
console.log(game.getState());
