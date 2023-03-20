const container = document.querySelector(".grid-container");
let size = 24;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

// Create 16x16 grid
const createGrid = (size) => {
  container.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
};

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
