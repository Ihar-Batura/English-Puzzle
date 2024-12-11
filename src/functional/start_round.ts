import { ILevelData } from './show_level_data';
import showPicture from './show_picture';
import createWordRow from '../layout/rows_of_words.ts';
import addBackgroundToPuzzle from './add_backgr_to_puzzle.ts';

export interface Iwords {
  audioExample: string;
  id: number;
  textExample: string;
  textExampleTranslate: string;
  word: string;
  wordTranslate: string;
}

interface IStartRound {
  levelData: ILevelData;
  words: Iwords[];
}

function startRound({ levelData, words }: IStartRound) {
  //showPicture(levelData.cutSrc, levelData.imageSrc);
  createWordRow(0, words);
  createWordRow(1, words);
  createWordRow(2, words);
  createWordRow(3, words);
  createWordRow(4, words);
  createWordRow(5, words);
  createWordRow(6, words);
  createWordRow(7, words);
  createWordRow(8, words);
  createWordRow(9, words);
  addBackgroundToPuzzle(levelData, 0);
  addBackgroundToPuzzle(levelData, 1);
  addBackgroundToPuzzle(levelData, 2);
  addBackgroundToPuzzle(levelData, 3);
  addBackgroundToPuzzle(levelData, 4);
  addBackgroundToPuzzle(levelData, 5);
  addBackgroundToPuzzle(levelData, 6);
  addBackgroundToPuzzle(levelData, 7);
  addBackgroundToPuzzle(levelData, 8);
  addBackgroundToPuzzle(levelData, 9);

  console.log(levelData);
  console.log(words);
  //   const textHint: HTMLDivElement | null = document.querySelector('.text-hint');
  //   if (textHint) {
  //     console.log(textHint);
  //   }

  //   const pictureBox: HTMLDivElement | null =
  //     document.querySelector('.game-board');
  //   if (pictureBox) {
  //     const windowWidth: number = window.innerWidth;
  //     if (windowWidth > 768) {
  //       pictureBox.style.backgroundImage = `url(public/images/${imageSrc})`; // нужно будет изменить public/images/ на /images/ пока так работает
  //     } else {
  //       pictureBox.style.backgroundImage = `url(public/images/${cutSrc})`;
  //     }
  //   }
  //   console.log(id); // временно, потом нужно подумать где использовать id
  //   console.log(words);
}

export default startRound;
