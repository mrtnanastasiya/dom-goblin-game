const GRID_SIZE = 16;
const GRID_CLASS = "grid";
const CELL_CLASS = "cell";
const PLAYER_CLASS = "player";

export default class Game {
  constructor(goblinImage) {
    if (!goblinImage) {
      throw new Error("Goblin image source is required");
    }

    this.gridElement = document.createElement("div");
    this.gridElement.classList.add(GRID_CLASS);
    document.body.append(this.gridElement);
    this.cells = [];
    this.createCells(GRID_SIZE);
    this.playerImage = document.createElement("img");
    this.playerImage.src = goblinImage; // Устанавливаем источник изображения
    this.playerImage.classList.add(PLAYER_CLASS);
    this.placePlayerRandomly(); // Размещаем игрока в случайной клетке
  }

  createCells(numberOfCells) {
    for (let i = 0; i < numberOfCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add(CELL_CLASS);
      this.gridElement.append(cell);
      this.cells.push(cell); // Сохраняем ссылку на клетку
    }
  }

  getRandomPosition() {
    const randomIndex = Math.floor(Math.random() * this.cells.length);
    return this.cells[randomIndex];
  }

  placePlayerRandomly() {
    if (!this.playerImage || !this.cells.length) {
      return;
    }
    const randomCell = this.getRandomPosition();
    randomCell.append(this.playerImage); // Размещаем изображение игрока в случайной клетке
  }

  movePlayer() {
    const currentCell = Array.from(this.cells).find((cell) =>
      cell.contains(this.playerImage),
    );
    let newCell = this.getRandomPosition(); // Ищем новое место, если оно совпадает с текущим
    while (newCell === currentCell) {
      newCell = this.getRandomPosition();
    }

    newCell.append(this.playerImage); // Перемещаем игрока в новую клетку
  }
}
