import nextRowRoundLevel from './next_row_round_level';
import deletePageResults from './delete_page_results';

function clickBtn(): void {
  const btn: HTMLButtonElement | null = document.querySelector(
    '.check-solution__btn'
  );
  const resultContainer: HTMLElement | null =
    document.querySelector('.result-container');
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
    if (btn.innerText === 'Continue') {
      nextRowRoundLevel();
      if (resultContainer) {
        deletePageResults();
      }
    }
  }
}

export default clickBtn;
