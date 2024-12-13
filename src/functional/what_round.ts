import getUserLastRoundFromLS from './get_last_round_from_LS';

function whatRoundChoose(): string {
  const roundBtn: HTMLSelectElement | null =
    document.querySelector('#round-btn');
  if (roundBtn) {
    const round = roundBtn.value;
    return round;
  } else {
    const lastRound: string[] | undefined = getUserLastRoundFromLS();
    return lastRound ? `${lastRound[1]}` : '1';
  }
}

export default whatRoundChoose;
