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

let winnerArray = [];

// ADDED FEATURE TO CHOOSE WHAT ICON YOU WANT TO PLAY AS

const chooseIcon = (event) => {
  if (event.target.innerHTML == "o") {
    currentPlayer = playerX;
    console.log(currentPlayer);
    console.log("o");
  } else if (event.target.innerHTML == "x") {
    currentPlayer = playerO;
    console.log(currentPlayer);
  }
};

const userSelection = () => {
  buttonX.addEventListener("click", chooseIcon);
  buttonO.addEventListener("click", chooseIcon);
};

let currentPlayer = userSelection();

// const winningCombination = [
//   ["0", "1", "2"],
//   ["3", "4", "5"],
//   ["6", "7", "8"],
//   ["0", "3", "6"],
//   ["1", "4", "7"],
//   ["2", "5", "8"],
//   ["0", "4", "8"],
//   ["2", "4", "6"],
// ];


// FUNCTION TO CHECK EACH ARRAY AND RETURN A TRUE OR FALSE VALUE => DEPENDING IF ALL OF THEM ARE THE SAME VALUE AS THE CURRENT PLAYER


// TAKES WINNING NUMBERS 
const checkArray = (num1, num2, num3) => {
  const winningArr = [
    cells[num1].innerHTML,
    cells[num2].innerHTML,
    cells[num3].innerHTML,
  ];

  const result = winningArr.every((item) => item === currentPlayer);
  return result;
};

const winningCycle = () => {
  if (
 checkArray(0, 1, 2) ||
 checkArray(3, 4, 5) ||
 checkArray(6, 7, 8) ||
 checkArray(0, 3, 6) ||
 checkArray(1, 4, 7) ||
 checkArray(2, 5, 8) ||
 checkArray(0, 4, 8) ||
 checkArray(2, 4, 6)
  ) {
    alert(`WELL DONE!!${currentPlayer}`);
  } else if (counter >= 9) {
    alert(`ITS A DRAW!!!!!!!!!`)
  }

  // if (cells[0].textContent === cells[1].textContent &&
  // cells[1].textContent === cells[2].textContent) { alert(`Player ${currentPlayer} wins!!`)}

  // else if (cells[3].textContent === cells[4].textContent &&
  //         cells[4].textContent === cells[5].textContent) { alert(`1 ${currentPlayer} wins!!`)}

  // else if (cells[6].textContent === cells[7].textContent &&
  //         cells[7].textContent === cells[8].textContent) { alert(`2${currentPlayer} wins!!`)}

  // else if (cells[0].textContent === cells[3].textContent &&
  //         cells[3].textContent === cells[6].textContent) { alert(`3${currentPlayer} wins!!`)}

  // else if (cells[1].textContent === cells[4].textContent &&
  //         cells[4].textContent === cells[7].textContent) { alert(`4${currentPlayer} wins!!`)}

  // else if (cells[2].textContent === cells[5].textContent &&
  //         cells[5].textContent === cells[8].textContent) { alert(`5${currentPlayer} wins!!`)}

  // else if (cells[0].textContent === cells[4].textContent &&
  //         cells[4].textContent === cells[8].textContent) { alert(`6${currentPlayer} wins!!`)}

  // else if (cells[2].textContent === cells[4].textContent &&
  //         cells[4].textContent === cells[6].textContent) { alert(`7${currentPlayer} wins!!`)}
};

// const winningCycle = () => {
//   if (
//     cells[0].textContent === "o" &&
//     cells[1].textContent === "o" &&
//     cells[2].textContent === "o"
//   ) {
//     alert("Win");
//   } else if (
//     cells[3].textContent === "o" &&
//     cells[4].textContent === "o" &&
//     cells[5].textContent === "o"
//   ) {
//     alert("Win");
//   } else if (
//     cells[6].textContent === "o" &&
//     cells[7].textContent === "o" &&
//     cells[8].textContent === "o"
//   ) {
//     alert("Win");
//   } else if (
//     cells[0].textContent === "o" &&
//     cells[3].textContent === "o" &&
//     cells[6].textContent === "o"
//   ) {
//     alert("Win");
//   } else if (
//     cells[1].textContent === "o" &&
//     cells[4].textContent === "o" &&
//     cells[7].textContent === "o"
//   ) {
//     alert("Win");
//   } else if (
//     cells[2].textContent === "o" &&
//     cells[5].textContent === "o" &&
//     cells[8].textContent === "o"
//   ) {
//     alert("Win");
//   } else if (
//     cells[0].textContent === "o" &&
//     cells[4].textContent === "o" &&
//     cells[8].textContent === "o"
//   ) {
//     alert("Win");
//   } else if (
//     cells[2].textContent === "o" &&
//     cells[4].textContent === "o" &&
//     cells[6].textContent === "o"
//   ) {
//     alert("Win");
//   }

//   if (
//     cells[0].textContent === "x" &&
//     cells[1].textContent === "x" &&
//     cells[2].textContent === "x"
//   ) {
//     alert("Win");
//   } else if (
//     cells[3].textContent === "x" &&
//     cells[4].textContent === "x" &&
//     cells[5].textContent === "x"
//   ) {
//     alert("Win");
//   } else if (
//     cells[6].textContent === "x" &&
//     cells[7].textContent === "x" &&
//     cells[8].textContent === "x"
//   ) {
//     alert("Win");
//   } else if (
//     cells[0].textContent === "x" &&
//     cells[3].textContent === "x" &&
//     cells[6].textContent === "x"
//   ) {
//     alert("Win");
//   } else if (
//     cells[1].textContent === "x" &&
//     cells[4].textContent === "x" &&
//     cells[7].textContent === "x"
//   ) {
//     alert("Win");
//   } else if (
//     cells[2].textContent === "x" &&
//     cells[5].textContent === "x" &&
//     cells[8].textContent === "x"
//   ) {
//     alert("Win");
//   } else if (
//     cells[0].textContent === "x" &&
//     cells[4].textContent === "x" &&
//     cells[8].textContent === "x"
//   ) {
//     alert("Win");
//   } else if (
//     cells[2].textContent === "x" &&
//     cells[4].textContent === "x" &&
//     cells[6].textContent === "x"
//   ) {
//     alert("Win");
//   }
// };

// FUNCTION TO START THE GAME WITH CLICK EVENTS ON THE CELLS!!

const startGame = () => {
  cells.forEach((cell) => {
    cell.addEventListener("click", boxClicked);
  });
};

// WHEN TARGET IS CLICKED IT TAKES THE VALUE FROM THE EVENT IN THIS CASE THE ID'S

boxClicked = (event) => {

  if (!currentPlayer) {
    alert(`SELECT AN ICON TO BEGIN THE GAME!!`);
  } else {
    if (event.target.innerHTML === "") {
      if (currentPlayer === playerX) {
        currentPlayer = playerO;
      } else if (currentPlayer === playerO) {
        currentPlayer = playerX;
      }
      event.target.innerHTML = currentPlayer;
      counter++
    }
    winningCycle();
  }
};

// FUNCTION TO CHECK IF PLAYER HAS ONE

// const playerHasWon = () => {
//   if (String(winnerArray) == winningCombination[0]) {
//     alert("winner");
//   } else if (String(winnerArray) == winningCombination[1]) {
//     alert("winner");
//   } else {
//     console.log(winnerArray);
//     console.log(winningCombination[0]);
//   }
// };

// FUNCTION TO RESTART THE GAME
const restart = () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  heading.innerHTML = "Tic Tac Toe";
  winnerArray = [];
  counter = 0;
};
restartButton.addEventListener("click", restart);

startGame();
