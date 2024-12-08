function whatRoundChoose(): string {
  const roundBtn: HTMLSelectElement | null =
    document.querySelector('#round-btn');
  if (roundBtn) {
    const round = roundBtn.value;
    console.log(round);
    return round;
  } else {
    return '1';
  }
}

export default whatRoundChoose;
