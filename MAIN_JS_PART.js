let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function cellClicked(index) {
  if (gameOver || board[index] !== '') return;

  board[index] = currentPlayer;
  document.getElementById('board').children[index].innerText = currentPlayer;

  if (checkWinner(currentPlayer)) {
    document.getElementById('message').innerText = `${currentPlayer} wins!`;
    gameOver = true;
  } else if (board.every(cell => cell !== '')) {
    document.getElementById('message').innerText = "It's a draw!";
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner(player) {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winConditions.some(condition => {
    return condition.every(index => board[index] === player);
  });
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  document.getElementById('message').innerText = '';
  Array.from(document.getElementById('board').children).forEach(cell => {
    cell.innerText = '';
  });
}
