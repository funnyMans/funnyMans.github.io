const boxNode = document.querySelectorAll(".vertical");
const boxArray = Array.from(boxNode);
const mainArea = document.querySelector("#mainArea");
const gameOver = document.querySelector("#gameOver");
const resultText = document.querySelector("#result");
const showWinner = document.querySelector("#showWinner");
const newGameBtn = document.querySelector("#startNewGame");

const playerOne = "x";
const playerTwo = "o";
let turn = playerOne;

const startNewGame = () => {
  mainArea.style.display = "flex";
  gameOver.style.display = "none";
};

function eventListener(e) {
  if (e.target.textContent === "") {
    e.target.textContent = turn;
    turn === playerOne ? (turn = playerTwo) : (turn = playerOne);
  }
  const result = checkWinner();
  if (result) {
    boxArray.forEach((element) => {
      element.textContent = "";
      turn = playerOne;
    });
    mainArea.style.display = "none";
    gameOver.style.display = "flex";
    showWinner.textContent = result;
  }
}

function checkWinner() {
  let winner;
  let possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  possibleWins.map((win) => {
    if (boxArray[win[0]].textContent) {
      if (
        boxArray[win[0]].textContent === "x" &&
        boxArray[win[1]].textContent === "x" &&
        boxArray[win[2]].textContent === "x"
      ) {
        winner = "Player One Wins..!!!";
      } else if (
        boxArray[win[0]].textContent === "o" &&
        boxArray[win[1]].textContent === "o" &&
        boxArray[win[2]].textContent === "o"
      ) {
        winner = "Player Two Wins..!!!";
      }
    }
  });

  return winner
    ? winner
    : boxArray.every((box) => box.textContent)
    ? "Draw..!!!"
    : undefined;
}

boxArray.map((box) => {
  box.addEventListener("click", eventListener);
});

newGameBtn.addEventListener("click", startNewGame);
