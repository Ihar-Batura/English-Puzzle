import createDiv from '../../components/div';
import createButton from '../../components/button';
import clickBtn from '../../functional/btn_check_sentence';

function createPageResults() {
  const main: HTMLElement | null = document.querySelector('.main');
  if (main) {
    const pageResults = createDiv({ className: 'page-result', parent: main });
    const resultContainer = createDiv({
      className: 'result-container',
      parent: pageResults,
    });
    createDiv({ className: 'result-img', parent: resultContainer });
    createDiv({
      className: 'result-img__description',
      text: 'Здесь будет название картины и автор',
      parent: resultContainer,
    });
    createDiv({
      className: 'result-know',
      text: 'I know:',
      parent: resultContainer,
    });
    createDiv({
      className: 'result-dontknow',
      text: `I don't know:`,
      parent: resultContainer,
    });
    const resultItem = createDiv({
      className: 'result-item',
      parent: resultContainer,
    });
    createButton({
      className: 'result-item__btn',
      parent: resultItem,
    });
    createDiv({
      className: 'result-item__text',
      text: 'description item',
      parent: resultItem,
    });
    createButton({
      className: 'check-solution__btn',
      text: 'Continue',
      onClick: () => clickBtn(),
      parent: resultContainer,
    });
  }
}

export default createPageResults;
