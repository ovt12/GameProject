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