function isShowPuzzlesBkg(value?: boolean) {
  const btn: HTMLButtonElement | null = document.querySelector('#image-btn');
  if (btn) {
    const gameBoardRows: NodeListOf<Element> =
      document.querySelectorAll('.game-board__row');

    const lastRow: string | null = gameBoardRows[gameBoardRows.length - 1].id;

    const answerRowElements: NodeListOf<Element> = document.querySelectorAll(
      `#${lastRow} .game-board__row-word, .game-words .game-board__row-word`
    );

    if (btn.classList.value.includes('cliked') || value === false) {
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
