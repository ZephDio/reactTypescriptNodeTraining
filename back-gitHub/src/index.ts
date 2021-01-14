import express from "express";
import cors from "cors";
import socketio from "socket.io";
import http from "http";
import { verify } from "./generalFunction";
import { Game } from "./game";
import { Pion } from "./pion";

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors());

app.post("/submitPion", (req: express.Request, res: express.Response) => {
  console.log("salut tes bonne");
  if (verify(req)) {
    game.plate.addPion(
      { x: req.body.x, y: req.body.y },
      new Pion(req.body.color)
    );
    console.log(game.plate.getState());
    res.write(JSON.stringify(game.getState()));
    res.end();
  } else {
    res.write("Nope Nigga");
    res.end();
  }
});

server.on("connection", (socket: any) => {
  socket.emit("gamestate", game.getState());
});

app.get("/state", (req: express.Request, res: express.Response) => {
  res.write(JSON.stringify(game.getState()));
  res.end();
});

app.use((req: any, res: any, next: any) => {
  // redirect all requests that have not been handled by the previous middleware to /
  // tells the navigator to go to / directly
  // the navigator rerequests the server and the request get intercepted by the first middleware
  res.redirect("/");
});

server.listen(3000, () => {
  console.log("listening to port: 3000");
});

const game = new Game();
