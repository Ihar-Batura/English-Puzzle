import createDiv from '../../components/div';
import createSelectElement from '../../components/select';
import whatLevelChoosed from '../../functional/what_level';
import giveLevelData from '../../functional/give_level_data';

function createHintsContainer() {
  const hintsContainer = createDiv({ className: 'hints-container' });
  const selectLevelsBtn = createSelectElement(
    'Level',
    6,
    'select-levels',
    'level-btn'
  );
  let startLevel = whatLevelChoosed();

  selectLevelsBtn.addEventListener('change', () => {
    startLevel = whatLevelChoosed();
    console.log(startLevel);
    giveLevelData(startLevel);
  });

  hintsContainer.append(selectLevelsBtn);
  return hintsContainer;
}

export default createHintsContainer;
