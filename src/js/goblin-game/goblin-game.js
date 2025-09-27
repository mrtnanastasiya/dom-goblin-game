export default class Game {
  constructor(goblinImage) {
    this.gridElement = document.createElement("div");
    this.gridElement.classList.add("grid");
    document.body.appendChild(this.gridElement);
    this.cells = [];
    this.createCells(16); // Создаем 16 клеток для поля
    this.playerImage = document.createElement("img");
    this.playerImage.src = goblinImage; // Устанавливаем источник изображения
    this.playerImage.classList.add("player");
    this.placePlayerRandomly(); // Размещаем игрока в случайной клетке
  }

  createCells(numberOfCells) {
    for (let i = 0; i < numberOfCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.gridElement.appendChild(cell);
      this.cells.push(cell); // Сохраняем ссылку на клетку
    }
  }

  getRandomPosition() {
    const randomIndex = Math.floor(Math.random() * this.cells.length);
    return this.cells[randomIndex];
  }

  placePlayerRandomly() {
    const randomCell = this.getRandomPosition();
    randomCell.appendChild(this.playerImage); // Размещаем изображение игрока в случайной клетке
  }

  movePlayer() {
    const currentCell = Array.from(this.cells).find((cell) =>
      cell.contains(this.playerImage),
    );
    let newCell = this.getRandomPosition(); // Ищем новое место, если оно совпадает с текущим
    while (newCell === currentCell) {
      newCell = this.getRandomPosition();
    }
    newCell.appendChild(this.playerImage); // Перемещаем игрока в новую клетку
  }
}
