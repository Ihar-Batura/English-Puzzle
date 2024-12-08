import createSelectElement from '../../components/select';
import whatLevelChoose from '../../functional/what_level';
import whatRoundChoose from '../../functional/what_round';
import giveLevelData from '../../functional/give_level_data';

function createButtonsLevel(parent: HTMLElement) {
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

  let startLevel = whatLevelChoose();
  let startRound = whatRoundChoose();
  giveLevelData(startLevel, startRound);

  selectLevelsBtn.addEventListener('change', () => {
    startLevel = whatLevelChoose();
    startRound = whatRoundChoose();
    giveLevelData(startLevel, startRound);
  });

  selectRoundsBtn.addEventListener('change', () => {
    startLevel = whatLevelChoose();
    startRound = whatRoundChoose();
    giveLevelData(startLevel, startRound);
  });

  parent.append(selectLevelsBtn, selectRoundsBtn);
}

export default createButtonsLevel;
