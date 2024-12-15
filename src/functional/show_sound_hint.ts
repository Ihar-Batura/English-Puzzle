function isShowSoundHint(value?: boolean): void {
  const soundHint: HTMLDivElement | null = document.querySelector('#sound-btn');
  const btnTranslate: HTMLButtonElement | null =
    document.querySelector('#translate-btn');

  if (soundHint && btnTranslate) {
    soundHint.classList.toggle('hidden');
    btnTranslate.classList.toggle('add-position');
    if (value === true) {
      soundHint.classList.remove('hidden');
      btnTranslate.classList.remove('add-position');
    }
    if (value === false) {
      soundHint.classList.add('hidden');
      btnTranslate.classList.add('add-position');
    }
  }
}

export default isShowSoundHint;
