import createDiv from '../../components/div';

function createWordRow(rowNumber: number) {
  const gameField: HTMLDivElement | null =
    document.querySelector('.game-board');
  if (gameField) {
    const row: HTMLDivElement = createDiv({
      className: 'game-board__row',
      id: `row_${rowNumber}`,
    });

    gameField.append(row);
  }
}

export default createWordRow;
