import isBtnPush from './is_btn_push';

function isShowTextHint(): void {
  const textHint: HTMLDivElement | null = document.querySelector('.text-hint');
  if (textHint) {
    textHint.classList.toggle('hidden');
    isBtnPush('translate-btn');
  }
}

export default isShowTextHint;
