const boxContainer = document.querySelector(".box-container");
const cells = Array.from(document.querySelectorAll(".cell"));
const board = document.querySelectorAll(".board");
const restartButton = document.querySelector(".restartButton");
const winningMessage = document.querySelector(".winningMessage");
const endGameMessages = document.querySelector(".endGameMessages");

const playerX = "x";
const playerO = "o";

let currentPLayer = playerX;

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// FUNCTION TO START THE GAME WITH CLICK EVENTS ON THE CELLS!!
const startGame = () => {
  cells.forEach((cell) => {
    cell.addEventListener("click", boxClicked);
  });
};

// WHEN TARGET IS CLICKED IT TAKES THE VALUE FROM THE EVENT IN THIS CASE THE ID'S
boxClicked = (event) => {
  if (currentPLayer == playerX) {
    event.target.innertext = currentPLayer;
  }
  if (currentPLayer == playerX) {
    currentPLayer = playerO;
  } else {
    currentPLayer = playerX;
  }

  return (event.target.innerHTML = currentPLayer);
};

console.log(currentPLayer);
console.log(cells);

startGame();

winningMessage.innerHTML = "hello";
