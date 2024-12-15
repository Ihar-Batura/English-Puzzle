import createDiv from '../../components/div';
import createButton from '../../components/button';
import clickBtn from '../../functional/btn_check_sentence';
import addResultsToPageResults from '../../functional/add_results_to_page_results';

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
      text: '',
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
    createButton({
      className: 'check-solution__btn',
      text: 'Continue',
      onClick: () => clickBtn(),
      parent: resultContainer,
    });

    addResultsToPageResults();
  }
}

export default createPageResults;
