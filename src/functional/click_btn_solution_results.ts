import showSolution from './show_solution';
import isSentenceRight from './check_sentence_is_right';
import turnCheckBtn from './turn_btn_check';
import createPageResults from '../layout/page_results';

function clickBtnSolutionOrResults() {
  const btn: HTMLButtonElement | null = document.querySelector('.solution-btn');
  if (btn) {
    if (btn.innerText === 'Solution') {
      showSolution();
      isSentenceRight();
      turnCheckBtn();
    }
    if (btn.innerText === 'Results') {
      createPageResults();
    }
  }
}

export default clickBtnSolutionOrResults;
