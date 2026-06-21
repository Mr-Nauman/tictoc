const boardElement = document.getElementById("board");
const turnIndicator = document.getElementById("turnIndicator");
const resultIndicator = document.getElementById("resultIndicator");
const resetButton = document.getElementById("resetButton");

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = Array(9).fill("");
let currentPlayer = "X";
let gameOver = false;

function updateStatus(message, turn = currentPlayer) {
  turnIndicator.textContent = turn;
  resultIndicator.textContent = message;
}

function renderBoard() {
  boardElement.innerHTML = "";

  board.forEach((value, index) => {
    const button = document.createElement("button");
    button.className = "cell";
    button.type = "button";
    button.setAttribute("role", "gridcell");
    button.setAttribute("aria-label", `Cell ${index + 1}`);
    button.textContent = value;
    button.disabled = gameOver || value !== "";
    button.addEventListener("click", () => handleMove(index));
    boardElement.appendChild(button);
  });
}

function getWinner() {
  for (const [a, b, c] of winningLines) {
    const mark = board[a];
    if (mark && mark === board[b] && mark === board[c]) {
      return { mark, line: [a, b, c] };
    }
  }
  return null;
}

function handleMove(index) {
  if (gameOver || board[index]) {
    return;
  }

  board[index] = currentPlayer;
  const winner = getWinner();

  if (winner) {
    gameOver = true;
    updateStatus(`${winner.mark} wins`, winner.mark);
    renderBoard();
    [...boardElement.children].forEach((cell, cellIndex) => {
      if (winner.line.includes(cellIndex)) {
        cell.classList.add("win");
      }
    });
    return;
  }

  if (!board.includes("")) {
    gameOver = true;
    updateStatus("Draw", currentPlayer);
    renderBoard();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus("In progress");
  renderBoard();
}

function resetGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  gameOver = false;
  updateStatus("In progress");
  renderBoard();
}

resetButton.addEventListener("click", resetGame);
resetGame();
