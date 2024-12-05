import createDiv from '../../components/div';
import createButton from '../../components/button';

function createSolutionButtons() {
  const btnsContainer = createDiv({ className: 'btns-solution__container' });

  const btnSolution = createButton({
    className: 'solution-btn',
    text: 'Solution',
  });
  const btnCheck = createButton({
    className: 'check-solution__btn',
    text: 'Check',
    disabled: true,
  });

  btnsContainer.append(btnSolution, btnCheck);

  return btnsContainer;
}

export default createSolutionButtons;
