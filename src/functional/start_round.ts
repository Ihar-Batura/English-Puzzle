import { ILevelData } from './show_level_data';
import showPicture from './show_picture';
import createWordRow from '../layout/rows_of_words.ts';

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
