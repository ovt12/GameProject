const boxContainer = document.querySelector(".box-container");
const cells = Array.from(document.querySelectorAll(".cell"));
const board = document.querySelectorAll(".board");
const restartButton = document.querySelector(".restartButton");
const winningMessage = document.querySelector(".winningMessage");
const endGameMessages = document.querySelector(".endGameMessages");
const heading = document.querySelector("h1");

const buttonX = document.querySelector(".selection__button-x");
const buttonO = document.querySelector(".selection__button-o");

const playerX = "x";
const playerO = "o";

let counter = 0


// ADDED FEATURE TO CHOOSE WHAT ICON YOU WANT TO PLAY AS / TARGETS THE CLICK EVENTS OF THE ICON BUTTONS

const chooseIcon = (event) => {
  if (event.target.innerHTML == "o") {
    currentPlayer = playerX;
  } else if (event.target.innerHTML == "x") {
    currentPlayer = playerO;
  }
};

const userSelection = () => {
  buttonX.addEventListener("click", chooseIcon);
  buttonO.addEventListener("click", chooseIcon);
};

let currentPlayer = userSelection();


// FUNCTION TO CHECK EACH ARRAY AND RETURN A TRUE OR FALSE VALUE => DEPENDING IF ALL THE ARRAY ELEMENTS ARE THE SAME VALUE AS THE CURRENT PLAYER
// TAKES WINNING NUMBERS 
const checkForWinningRow = (cellIndex1, cellIndex2, cellIndex3) => {
  const winningArr = [
    cells[cellIndex1].innerHTML,
    cells[cellIndex2].innerHTML,
    cells[cellIndex3].innerHTML,
  ];

  const result = winningArr.every((item) => item === currentPlayer);
  return result;
};

const winningCycle = () => {
  if (
 checkForWinningRow(0, 1, 2) ||
 checkForWinningRow(3, 4, 5) ||
 checkForWinningRow(6, 7, 8) ||
 checkForWinningRow(0, 3, 6) ||
 checkForWinningRow(1, 4, 7) ||
 checkForWinningRow(2, 5, 8) ||
 checkForWinningRow(0, 4, 8) ||
 checkForWinningRow(2, 4, 6)
  ) {
    heading.innerHTML = `PLAYER ${currentPlayer.toUpperCase()} WINS THE GAME.`;
    cells.forEach((cell) => {
      cell.innerHTML = currentPlayer;
    });
  } else if (counter >= 9) {
    heading.innerHTML = `DRAW!`;
    currentPlayer = ""
  }

};



// FUNCTION TO START THE GAME WITH CLICK EVENTS ON THE CELLS!!

const startGame = () => {
  cells.forEach((cell) => {
    cell.addEventListener("click", boxClicked);
  });
};

// WHEN TARGET IS CLICKED IT TAKES THE VALUE FROM THE EVENT IN THIS CASE THE ID'S

boxClicked = (event) => {

  if (!currentPlayer) {
    heading.innerHTML = "SELECT ICON TO BEGIN GAME";
  } else {
    if (event.target.innerHTML === "") {
      if (currentPlayer === playerX) {
        currentPlayer = playerO;
      } else if (currentPlayer === playerO) {
        currentPlayer = playerX;
      }
      heading.innerHTML = "BEGIN!";
      event.target.innerHTML = currentPlayer;
      counter++
    }
    winningCycle();
  }
};



// FUNCTION TO RESTART THE GAME
const restart = () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  heading.innerHTML = "Noughts & Crosses";
  currentPlayer = ""
  counter = 0;
};
restartButton.addEventListener("click", restart);

startGame();
