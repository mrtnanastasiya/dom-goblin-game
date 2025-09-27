// TODO: write code here

import Game from "./goblin-game/goblin-game.js";
import goblinImage from "../js/goblin-game/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(goblinImage);
  setInterval(() => {
    game.movePlayer();
  }, 2000);
});
