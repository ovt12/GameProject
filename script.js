const boxContainer = document.querySelector(".box-container");
const cells = Array.from(document.querySelectorAll(".cell"));
const board = document.querySelectorAll(".board");
const restartButton = document.querySelector(".restartButton");
const winningMessage = document.querySelector(".winningMessage");
const endGameMessages = document.querySelector(".endGameMessages");
const heading = document.querySelector("h1")

const playerX = "x";
const playerO = "o";

let winnerArray = []

let currentPlayer = playerX;

const winningCombination = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];

// FUNCTION TO START THE GAME WITH CLICK EVENTS ON THE CELLS!!
const startGame = () => {
  cells.forEach((cell) => {
    cell.addEventListener("click", boxClicked);
  });
};

// WHEN TARGET IS CLICKED IT TAKES THE VALUE FROM THE EVENT IN THIS CASE THE ID'S

boxClicked = (event) => {
  if (currentPlayer == playerX) {
    event.target.innertext = currentPlayer;
    winnerArray.push(event.target.id)
  }

  if (currentPlayer == playerO) {
    currentPlayer = playerX;
  } else {
    currentPlayer = playerO;
  }
    event.target.innerHTML = currentPlayer;

    playerHasWon()
    
    
};

const playerHasWon = () => {
        if (winnerArray == winningCombination[0]) {
            alert("winner")
        }
        else {
            console.log(winnerArray)
            console.log(winningCombination[0])
        }
    }

console.log(winningCombination[0])


const restart = () => {
    cells.forEach(cell => {
        cell.innerHTML = ""
    })
    heading.innerHTML = "Tic Tac Toe"
    currentPlayer = playerO;
} 
restartButton.addEventListener("click", restart)


startGame();

