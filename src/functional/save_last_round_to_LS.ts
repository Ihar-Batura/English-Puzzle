function saveLastRoundsInLS(
  lastLevel: string = '1',
  lastRound: string = '1'
): void {
  const lastRoundData: string[] = [];
  lastRoundData.push(lastLevel);
  lastRoundData.push(lastRound);

  localStorage.setItem('UserPuzzleLastRound', JSON.stringify(lastRoundData));
}

export default saveLastRoundsInLS;
