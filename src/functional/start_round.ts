import { ILevelData } from './show_level_data';
import createWordRow from '../layout/rows_of_words.ts';
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

function startRound({ levelData, words }: IStartRound, roundNumber: number) {
  addAudio(words, roundNumber);
  addTextHint(words, roundNumber);
  createWordRow(roundNumber);
  addPuzzlesToAnswerRow(roundNumber, words, levelData);
  mixPuzzles();
  dragDropItems(roundNumber);
  turnCheckBtn();
  turnSolutionBtn(false);

  //showPicture(levelData.cutSrc, levelData.imageSrc);
}

export default startRound;
