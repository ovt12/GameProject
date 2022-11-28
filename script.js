const boxContainer = document.querySelector(".box-container");
const cells = Array.from(document.querySelectorAll(".cell"));
const board = document.querySelectorAll(".board");
const restartButton = document.querySelector(".restartButton");
const winningMessage = document.querySelector(".winningMessage");
const endGameMessages = document.querySelector(".endGameMessages");
const heading = document.querySelector("h1");

const playerX = "x";
const playerO = "o";

let winnerArray = [];

let currentPlayer = "x";

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


const winningCycle = () => {

    if (cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent) { alert(`Player ${currentPlayer} wins!!`)}
    
    else if (cells[3].textContent === cells[4].textContent &&
            cells[4].textContent === cells[5].textContent) { alert(`1 ${currentPlayer} wins!!`)}
    
    else if (cells[6].textContent === cells[7].textContent &&
            cells[7].textContent === cells[8].textContent) { alert(`2${currentPlayer} wins!!`)}
    
    else if (cells[0].textContent === cells[3].textContent &&
            cells[3].textContent === cells[6].textContent) { alert(`3${currentPlayer} wins!!`)}
    
    else if (cells[1].textContent === cells[4].textContent &&
            cells[4].textContent === cells[7].textContent) { alert(`4${currentPlayer} wins!!`)}

    else if (cells[2].textContent === cells[5].textContent &&
            cells[5].textContent === cells[8].textContent) { alert(`5${currentPlayer} wins!!`)}
        
    else if (cells[0].textContent === cells[4].textContent &&
            cells[4].textContent === cells[8].textContent) { alert(`6${currentPlayer} wins!!`)}
        
    else if (cells[2].textContent === cells[4].textContent &&
            cells[4].textContent === cells[6].textContent) { alert(`7${currentPlayer} wins!!`)}
}




    // if(cells[0].textContent === "o" &&
    //     cells[1].textContent === "o" &&
    //     cells[2].textContent === "o"
    //     ) { alert("Win")}
        // else if (
        //   cells[3].textContent === "o" &&
        //   cells[4].textContent === "o" &&
        //   cells[5].textContent === "o"
        // ) { alert("Win")}
        //  else if (
        //   cells[6].textContent === "o" &&
        //   cells[7].textContent === "o" &&
        //   cells[8].textContent === "o"
        // ) { alert("Win")}
        // else if (
        //     cells[0].textContent === "o" &&
        //     cells[3].textContent === "o" &&
        //     cells[6].textContent === "o"
        //   ) { alert("Win")}
        // else if (
        //     cells[1].textContent === "o" &&
        //     cells[4].textContent === "o" &&
        //     cells[7].textContent === "o"
        //   ) { alert("Win")}
        // else if (
        //     cells[2].textContent === "o" &&
        //     cells[5].textContent === "o" &&
        //     cells[8].textContent === "o"
        //   ) { alert("Win")}
        // else if (
        //     cells[0].textContent === "o" &&
        //     cells[4].textContent === "o" &&
        //     cells[8].textContent === "o"
        //   ) { alert("Win")}
        // else if (
        //     cells[2].textContent === "o" &&
        //     cells[4].textContent === "o" &&
        //     cells[6].textContent === "o"
        //   ) { alert("Win")}
        

        // if(cells[0].textContent === "x" &&
        //   cells[1].textContent === "x" &&
        //   cells[2].textContent === "x"
        //   ) { alert("Win")}
        //   else if (
        //     cells[3].textContent === "x" &&
        //     cells[4].textContent === "x" &&
        //     cells[5].textContent === "x"
        //   ) { alert("Win")}
        //    else if (
        //     cells[6].textContent === "x" &&
        //     cells[7].textContent === "x" &&
        //     cells[8].textContent === "x"
        //   ) { alert("Win")}
        //   else if (
        //       cells[0].textContent === "x" &&
        //       cells[3].textContent === "x" &&
        //       cells[6].textContent === "x"
        //     ) { alert("Win")}
        //   else if (
        //       cells[1].textContent === "x" &&
        //       cells[4].textContent === "x" &&
        //       cells[7].textContent === "x"
        //     ) { alert("Win")}
        //   else if (
        //       cells[2].textContent === "x" &&
        //       cells[5].textContent === "x" &&
        //       cells[8].textContent === "x"
        //     ) { alert("Win")}
        //   else if (
        //       cells[0].textContent === "x" &&
        //       cells[4].textContent === "x" &&
        //       cells[8].textContent === "x"
        //     ) { alert("Win")}
        //   else if (
        //       cells[2].textContent === "x" &&
        //       cells[4].textContent === "x" &&
        //       cells[6].textContent === "x"
        //     ) { alert("Win")}
      
      






// FUNCTION TO START THE GAME WITH CLICK EVENTS ON THE CELLS!!
const startGame = () => {
  cells.forEach((cell) => {
    cell.addEventListener("click", boxClicked);
  });
};

// WHEN TARGET IS CLICKED IT TAKES THE VALUE FROM THE EVENT IN THIS CASE THE ID'S

boxClicked = (event) => {
  
if (event.target.innerHTML === "") {
    if (currentPlayer === playerX) {
        currentPlayer = playerO
      }
      else if (currentPlayer === playerO) {
        currentPlayer = playerX
      }
  event.target.innerHTML = currentPlayer;
}

  winningCycle();
//   playerHasWon();
};

// FUNCTION TO CHECK IF PLAYER HAS ONE


const playerHasWon = () => {
  if (String(winnerArray) == winningCombination[0]) {
    alert("winner");
  } else if (String(winnerArray) == winningCombination[1]) {
    alert("winner");
  } else {
    console.log(winnerArray);
    console.log(winningCombination[0]);
  }
};



// FUNCTION TO RESTART THE GAME
const restart = () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  heading.innerHTML = "Tic Tac Toe";
  currentPlayer = playerO;
  winnerArray = [];
};
restartButton.addEventListener("click", restart);

startGame();
