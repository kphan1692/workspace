/* 
 // JavaScript Functionality
    DEFINE function createGrid(size):
        CLEAR inner HTML of "grid-container"
        CALCULATE totalSquares as size * size
        CALCULATE squareSize as 960 / size
        
        FOR each i from 0 to totalSquares - 1 DO
            CREATE a DIV element called square
            ADD class "square" to square
            SET square's width and height to squareSize
            
            // Add hover effect
            ADD event listener for "mouseenter" on square:
                CHANGE square's background color to #3498db
            
            APPEND square to "grid-container"

    // Initial grid creation
    CALL createGrid(16)

    // Add event listener for button click
    ADD event listener for "click" on "resize-button":
        PROMPT user for the number of squares per side (max 100)
        LIMIT user input to between 1 and 100
        IF user input is valid THEN
            CALL createGrid with newSize */
const container = document.getElementById("grid-container");
const button = document.getElementById("resize-button");

let totalSquares;
let squareSize;

function createGrid(size) {
  container.innerHTML = "";
  totalSquares = size * size;
  squareSize = 960 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    //Add hover effect
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#3498db";
    });

    container.appendChild(square);
  }
}
// Initial grid creation
createGrid(16);

// Resize grid on button click
button.addEventListener("click", () => {
  let newSize = prompt("Enter the number of squares per side (max 100):");
  newSize = Math.min(Math.max(newSize, 1), 100); // Limit input to between 1 and 100
  if (newSize) {
    createGrid(newSize);
  }
});

/* This pseudocode represents a simple grid creation algorithm where:
First, we select a container element and define our grid dimensions
The createGrid function creates the specified number of div elements (256 in this case, from 16×16)
Each created div gets a "grid-item" class
Finally, each div is added to the container element
The function is called to execute the grid creation  */

/* const container = document.querySelector(".container");
let GRID_SIZE = 24;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;

const setBtn = document.querySelector("#setBtn");
setBtn.addEventListener("click", () => {
  GRID_SIZE = prompt("Please enter grid size");
  container.innerHTML = ""; //empty container DOM element
  createGrid();
});

function createGrid() {
  for (let i = 0; i < TOTAL_CELLS; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.addEventListener("mouseover", function () {
      gridItem.style.backgroundColor = "grey";
    });

    container.appendChild(gridItem);
  }
}

createGrid(); */
