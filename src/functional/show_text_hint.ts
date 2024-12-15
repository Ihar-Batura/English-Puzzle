function isShowTextHint(value?: boolean): void {
  const textHint: HTMLDivElement | null = document.querySelector('.text-hint');
  if (textHint) {
    textHint.classList.toggle('hidden');
    if (value === true) {
      textHint.classList.remove('hidden');
    }
    if (value === false) {
      textHint.classList.add('hidden');
    }
  }
}

export default isShowTextHint;
