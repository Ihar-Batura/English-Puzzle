import createDiv from '../../components/div';
import createSelectElement from '../../components/select';

function createHintsContainer() {
  const hintsContainer = createDiv({ className: 'hints-container' });
  const selectLevelsBtn = createSelectElement('Level', 6, 'select-levels');

  hintsContainer.append(selectLevelsBtn);
  return hintsContainer;
}

export default createHintsContainer;
