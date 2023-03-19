const container = document.querySelector(".grid-container");
let squareSize = 16;
const hoveredSquares = new Set();
let currentColor = "#000000";

const createGrid = (size) => {
  container.style.width = "600px";

  size = parseInt(prompt("Please enter a number between 1 and 100"));
  container.style.gridTemplateColumns = `repeat(${size}, 0fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 0fr)`;

  container.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
};

createGrid(squareSize);
