import isShowPuzzlesBkg from './is_show_puzzles_bg';
import isBtnPush from './is_btn_push';

function clickShowBackgroundBtn() {
  isBtnPush('image-btn');
  isShowPuzzlesBkg();
}

export default clickShowBackgroundBtn;
