function getRoundResultsFromLS(): [] | [number, boolean][] {
  const results: string | null = localStorage.getItem('UserPuzzleResults');
  if (results) {
    const roundResults = JSON.parse(results);
    return roundResults;
  }
  return [];
}

export default getRoundResultsFromLS;
