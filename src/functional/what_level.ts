import getUserLastRoundFromLS from './get_last_round_from_LS';

function whatLevelChoose(): string {
  const levelBtn: HTMLSelectElement | null =
    document.querySelector('#level-btn');
  if (levelBtn) {
    const level = levelBtn.value;

    return level;
  } else {
    const lastLevel: string[] | undefined = getUserLastRoundFromLS();
    return lastLevel ? `${lastLevel[0]}` : '1';
  }
}

export default whatLevelChoose;
