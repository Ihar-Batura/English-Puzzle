import isBtnPush from './is_btn_push';
import isShowSoundHint from './show_sound_hint';

function clickShowSoundHint(): void {
  isShowSoundHint();
  isBtnPush('audio-btn');
}

export default clickShowSoundHint;
