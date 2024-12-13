import createDiv from '../../components/div';
import createButton from '../../components/button';
import clickBtn from '../../functional/btn_check_sentence';
import clickBtnSolutionOrResults from '../../functional/click_btn_solution_results';

function createSolutionButtons() {
  const btnsContainer = createDiv({ className: 'btns-solution__container' });

  const btnSolution = createButton({
    className: 'solution-btn',
    text: 'Solution',
    onClick: () => clickBtnSolutionOrResults(),
  });
  const btnCheck = createButton({
    className: 'check-solution__btn',
    text: 'Check',
    disabled: true,
    onClick: () => clickBtn(),
  });

  btnsContainer.append(btnSolution, btnCheck);

  return btnsContainer;
}

export default createSolutionButtons;
