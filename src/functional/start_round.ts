import { ILevelData } from './show_level_data';
import showPicture from './show_picture';
import createWordRow from '../layout/rows_of_words.ts';
import addBackgroundToPuzzle from './add_background_to_puzzle.ts';
import addPuzzlesToAnswerRow from './add_puzzles_to_answer_row.ts';
import addAudio from './add_audio_hint.ts';
import addTextHint from './add_text_hint.ts';
import mixPuzzles from './mix_puzzles.ts';

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
  addAudio(words, 0);
  addTextHint(words, 0);
  addPuzzlesToAnswerRow(0, words, levelData);
  mixPuzzles();

  //showPicture(levelData.cutSrc, levelData.imageSrc);

  ///createWordRow(8, words);
  //createWordRow(9, words);

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
