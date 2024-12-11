import createDiv from '../../components/div';
import { Iwords } from '../../functional/start_round';
import dragRowItem from '../../functional/drag_row_items';

function createWordRow(rowNumber: number, words: Iwords[]) {
  const gameField: HTMLDivElement | null =
    document.querySelector('.game-board');
  if (gameField) {
    const rowLength: number = gameField.offsetWidth; // определяем ширину игрового поля
    const row: HTMLDivElement = createDiv({
      className: 'game-board__row',
      id: `row_${rowNumber}`,
    });

    const numberOfLetters: number = words[rowNumber].textExample.length; // получаем количество символов в предложение
    const arrRowWords = words[rowNumber].textExample.split(' '); // разбиваем предложение на массив и  можем узнать колличество пробелов
    const letterWidth: number =
      rowLength / (numberOfLetters - arrRowWords.length - 1); // получаем чистую ширину одного символа

    for (let j = 0; j < arrRowWords.length; j += 1) {
      const rowItem = createDiv({
        className: 'game-board__row-word',
        text: `${arrRowWords[j]}`,
        id: `${rowNumber}_${j}`,
      });
      const rowItemWidth: number = letterWidth * arrRowWords[j].length; // ширина одного блока с словом
      rowItem.style.maxWidth = `${rowItemWidth}px`;
      if (arrRowWords[j].length === 1) {
        rowItem.style.minWidth = `25px`;
      }
      rowItem.setAttribute('draggable', 'true');
      console.log(rowItem.style.width);

      row.append(rowItem);
    }

    gameField.append(row);
  }
}

export default createWordRow;
