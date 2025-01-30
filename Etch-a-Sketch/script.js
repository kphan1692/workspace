const container = document.querySelector(".container");
const GRID_SIZE = 16;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;

function createGrid() {
  for (let i = 0; i < TOTAL_CELLS; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    container.appendChild(gridItem);
  }
}

createGrid();
