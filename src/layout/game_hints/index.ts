import createDiv from '../../components/div';
import createSelectElement from '../../components/select';
import whatLevelChoosed from '../../functional/what_level';
import giveLevelData from '../../functional/give_level_data';

function createHintsContainer() {
  const hintsContainer = createDiv({ className: 'hints-container' });
  const selectLevelsBtn = createSelectElement({
    value: 'Level',
    options: 6,
    id: 'level-btn',
    className: 'select-levels',
  });

  const selectRoundsBtn = createSelectElement({
    value: 'Round',
    options: 1,
    id: 'round-btn',
    className: 'select-levels',
  });

  let startLevel = whatLevelChoosed();
  giveLevelData(startLevel);

  selectLevelsBtn.addEventListener('change', () => {
    startLevel = whatLevelChoosed();
    giveLevelData(startLevel);
  });

  hintsContainer.append(selectLevelsBtn, selectRoundsBtn);
  return hintsContainer;
}

export default createHintsContainer;
