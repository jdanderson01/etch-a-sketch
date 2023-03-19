const container = document.querySelector(".grid-container");

for (let i = 0; i < 16 * 16; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}
const squares = document.querySelectorAll(".square");
const hoveredSquares = new Set();
let currentColor = "#000000";

const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", (event) => {
  currentColor = event.target.value;
});

const updateColor = (event) => {
  const color = event.target.value;
  const hoveredClass = `.square.hovered { background-color: ${color}; }`;
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(hoveredClass));
  document.head.appendChild(style);
};

colorPicker.addEventListener("change", updateColor);

const mouseOver = (event) => {
  event.target.classList.add("square.hovered");
  event.target.style.backgroundColor = currentColor;
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
