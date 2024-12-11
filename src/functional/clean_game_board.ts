function cleanGameBoard() {
  const gameBoard: HTMLDivElement | null =
    document.querySelector('.game-board');
  if (gameBoard) {
    gameBoard.innerHTML = '';
  }
}

export default cleanGameBoard;