import createDiv from '../../components/div';
import { Iwords } from '../../functional/start_round';

function createWordRows(words: Iwords[]) {
  const gameField: HTMLDivElement | null =
    document.querySelector('.game-board');
  if (gameField) {
    gameField.innerHTML = '';
    const rowLength: number = gameField.offsetWidth; // определяем ширину игрового поля
    for (let i = 0; i < words.length; i += 1) {
      const row: HTMLDivElement = createDiv({ className: 'game-board__row' });

      const numberOfLetters: number = words[i].textExample.length; // получаем количество символов в предложение
      const arrRowWords = words[i].textExample.split(' '); // разбиваем предложение на массив и  можем узнать колличество пробелов
      const letterWidth: number =
        rowLength / (numberOfLetters - arrRowWords.length - 1); // получаем чистую ширину одного символа

      for (let j = 0; j < arrRowWords.length; j += 1) {
        const rowItem = createDiv({
          className: 'game-board__row-word',
          text: `${arrRowWords[j]}`,
        });
        const rowItemWidth: number = letterWidth * arrRowWords[j].length; // ширина одного блока с словом
        rowItem.style.width = `${rowItemWidth}px`;

        row.append(rowItem);
      }
      console.log(arrRowWords);
      gameField.append(row);
    }
  }
}

export default createWordRows;
