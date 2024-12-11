import { Iwords } from './start_round';
import createDiv from '../components/div';
import addBackgroundToPuzzle from './add_background_to_puzzle';
import { ILevelData } from './show_level_data';

function addPuzzlesToAnswerRow(
  rowNumber: number,
  words: Iwords[],
  levelData: ILevelData
) {
  const answerRow: HTMLElement | null = document.getElementById('answer-row');

  if (answerRow) {
    answerRow.innerHTML = '';
    const rowLength: number = answerRow.offsetWidth;
    const numberOfLetters: number = words[rowNumber].textExample.length;
    const arrRowWords = words[rowNumber].textExample.split(' ');
    const letterWidth: number =
      rowLength / (numberOfLetters - arrRowWords.length - 1);

    for (let j = 0; j < arrRowWords.length; j += 1) {
      const rowItem = createDiv({
        className: 'game-board__row-word',
        text: `${arrRowWords[j]}`,
        id: `${rowNumber}_${j}`,
      });
      const rowItemWidth: number = letterWidth * arrRowWords[j].length;
      rowItem.style.maxWidth = `${rowItemWidth}px`;
      if (arrRowWords[j].length === 1) {
        rowItem.style.minWidth = `25px`;
      }
      rowItem.setAttribute('draggable', 'true');
      answerRow.append(rowItem);
    }
  }
  addBackgroundToPuzzle(levelData, rowNumber);
}

export default addPuzzlesToAnswerRow;
