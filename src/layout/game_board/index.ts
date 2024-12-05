import createDiv from '../../components/div';

function createGameBoard(): HTMLDivElement {
  const gameBoard = createDiv({ className: 'game-board' });

  for (let i = 0; i <= 9; i += 1) {
    createDiv({ className: 'game-board__row', parent: gameBoard });
  }
  return gameBoard;
}

export default createGameBoard;
