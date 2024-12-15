function getCompleteRoundsFromLS(): [][] | number[][] {
  const arrCompleteRounds: string | null = localStorage.getItem(
    'UserPuzzleCompleteRounds'
  );
  if (arrCompleteRounds) {
    const completeRounds = JSON.parse(arrCompleteRounds);
    return completeRounds;
  }
  return [];
}

export default getCompleteRoundsFromLS;
