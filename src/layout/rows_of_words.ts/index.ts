import createDiv from '../../components/div';
import { Iwords } from '../../functional/start_round';

function createWordRows(words: Iwords[]) {
  const gameField: HTMLDivElement | null =
    document.querySelector('.game-board');
  if (gameField) {
    gameField.innerHTML = '';
    for (let i = 0; i < words.length; i += 1) {
      const row: HTMLDivElement = createDiv({ className: 'game-board__row' });
      const arrRowWords = words[i].textExample.split(' ');

      for (let j = 0; j < arrRowWords.length; j += 1) {
        createDiv({
          className: 'game-board__row-word',
          text: `${arrRowWords[j]}`,
          parent: row,
        });
      }
      console.log(arrRowWords);
      gameField.append(row);
    }
  }
}

export default createWordRows;
