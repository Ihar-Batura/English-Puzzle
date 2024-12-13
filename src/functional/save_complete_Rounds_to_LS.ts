function saveCompleteRoundsInLS(): void {
  const completeRounds = [[], [], [], [], [], []];
  localStorage.setItem(
    'UserPuzzleCompleteRounds',
    JSON.stringify(completeRounds)
  );
}

export default saveCompleteRoundsInLS;
