const container = document.querySelector(".grid-container");

// Create 16x16 grid
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

//Add hover effect
const squares = document.querySelectorAll(".square");

const hoveredSquares = new Set();

const mouseOver = (event) => {
  event.target.classList.add("hovered");
  hoveredSquares.add(event.target);
};

const mouseOut = (event) => {
  if (!hoveredSquares.has(event.target)) {
    event.target.classList.remove("hovered");
  }
};

squares.forEach((square) => {
  square.addEventListener("mouseover", mouseOver);
  square.addEventListener("mouseout", mouseOut);
});

//Clear effect
const clearButton = document.querySelector(".clear-button");

const clear = () => {
  squares.forEach((square) => {
    square.classList.remove("hovered");
  });
  hoveredSquares.clear();
};

clearButton.addEventListener("click", clear);
