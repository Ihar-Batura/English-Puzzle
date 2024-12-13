import isBtnPush from './is_btn_push';
import isShowTextHint from './show_text_hint';

function clickShowTextHint(): void {
  isShowTextHint();
  isBtnPush('translate-btn');
}

export default clickShowTextHint;
