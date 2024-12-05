import isBtnPush from './is_btn_push';

function isShowSoundHint(): void {
  const soundHint: HTMLDivElement | null = document.querySelector('#sound-btn');
  const btnTranslate: HTMLButtonElement | null =
    document.querySelector('#translate-btn');

  if (soundHint) {
    soundHint.classList.toggle('hidden');
    isBtnPush('audio-btn');
    if (btnTranslate) {
      btnTranslate.classList.toggle('add-position');
    }
  }
}

export default isShowSoundHint;
