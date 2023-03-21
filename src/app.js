const container = document.querySelector(".grid-container");
let size = 16;
let currentColor = "#000000";
const squares = document.querySelectorAll(".square");
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

// Create 16x16 grid
const createGrid = (size) => {
  container.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = currentColor;
    });
    container.appendChild(square);
  }
};

const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("change", (e) => {
  currentColor = e.target.value;
});

const changeGridSize = () => {
  let input = prompt("Enter grid size (e.g. 10 for a 10x10 grid):");
  if (input !== null) {
    let num = parseInt(input);
    if (!isNaN(num) && num > 0) {
      size = num;
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      createGrid(size);
    } else {
      alert("Invalid input. Please enter a positive number.");
    }
  }
};

createGrid(size);
