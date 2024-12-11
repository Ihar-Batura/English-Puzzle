import isBtnPush from './is_btn_push';

function isShowPuzzlesBkg() {
  isBtnPush('image-btn');
  const btn: HTMLButtonElement | null = document.querySelector('#image-btn');
  if (btn) {
    const answerRowElements: NodeListOf<Element> = document.querySelectorAll(
      '.game-words .game-board__row-word'
    );
    if (btn.classList.value.includes('cliked')) {
      answerRowElements.forEach((el) => {
        el.classList.add('image-hint-active');
      });
    } else {
      answerRowElements.forEach((el) => {
        el.classList.remove('image-hint-active');
      });
    }
  }
}

export default isShowPuzzlesBkg;
