function clickBtn(): void {
  const btn: HTMLButtonElement | null = document.querySelector(
    '.check-solution__btn'
  );
  if (btn) {
    if (btn.innerText === 'Check') {
      const gameRows: NodeListOf<Element> =
        document.querySelectorAll('.game-board__row');

      const lastRowId: string | null = gameRows[gameRows.length - 1].id;
      const answerElements: NodeListOf<Element> = document.querySelectorAll(
        `#${lastRowId} .game-board__row-word`
      );

      for (let i = 0; i < answerElements.length; i += 1) {
        const id: number = +answerElements[i].id.split('_')[1];
        if (id === i) {
          answerElements[i].classList.add('valid');
        } else {
          answerElements[i].classList.add('invalid');
        }
      }

      function deleteHintBorder(): void {
        answerElements.forEach((el) => {
          el.classList.remove('valid');
          el.classList.remove('invalid');
        });
      }
      setTimeout(deleteHintBorder, 1500);
    }
  }
}

export default clickBtn;
