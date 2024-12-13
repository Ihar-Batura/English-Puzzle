import getUserHintSateFromLS from './get_hits_state_from_ls';
import isShowTextHint from './show_text_hint';
import isShowSoundHint from './show_sound_hint';
import isShowPuzzlesBkg from './is_show_puzzles_bg';

function isShowHintsEveryRow(): void {
  const hintState = getUserHintSateFromLS();
  if (hintState) {
    isShowTextHint(hintState.text);
    isShowSoundHint(hintState.audio);
    isShowPuzzlesBkg(hintState.image);
  }
}

export default isShowHintsEveryRow;
