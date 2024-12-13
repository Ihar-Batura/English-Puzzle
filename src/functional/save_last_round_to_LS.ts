function saveLastRoundsInLS(): void {
  const lastRound = ['1', '1'];
  localStorage.setItem('UserPuzzleLastRound', JSON.stringify(lastRound));
}

export default saveLastRoundsInLS;
