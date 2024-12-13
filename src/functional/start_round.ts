import { ILevelData } from './show_level_data';
import showPicture from './show_picture';
import createWordRow from '../layout/rows_of_words.ts';
import addBackgroundToPuzzle from './add_background_to_puzzle.ts';
import addPuzzlesToAnswerRow from './add_puzzles_to_answer_row.ts';
import addAudio from './add_audio_hint.ts';
import addTextHint from './add_text_hint.ts';
import mixPuzzles from './mix_puzzles.ts';
import dragDropItems from './drag_drop_items.ts';
import turnCheckBtn from './turn_btn_check.ts';
import turnSolutionBtn from './turn_btn_solution.ts';

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
  createWordRow(0);
  addPuzzlesToAnswerRow(0, words, levelData);
  mixPuzzles();
  dragDropItems(0);
  turnCheckBtn();
  turnSolutionBtn(false);

  //showPicture(levelData.cutSrc, levelData.imageSrc);
}

export default startRound;
