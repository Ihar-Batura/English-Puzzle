import createDiv from '../../components/div';
import createSelectElement from '../../components/select';
import whatLevelChoosed from '../../functional/what_level';
import giveLevelData from '../../functional/give_level_data';
import createButton from '../../components/button';

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

  const soundBtn = createButton({
    className: 'hint-btn',
    id: 'sound-btn',
  });

  const translateBtn = createButton({
    className: 'hint-btn',
    id: 'translate-btn',
  });

  const audioBtn = createButton({
    className: 'hint-btn',
    id: 'audio-btn',
  });

  const imageBtn = createButton({
    className: 'hint-btn',
    id: 'image-btn',
  });

  hintsContainer.append(
    selectLevelsBtn,
    selectRoundsBtn,
    soundBtn,
    translateBtn,
    audioBtn,
    imageBtn
  );
  return hintsContainer;
}

export default createHintsContainer;
