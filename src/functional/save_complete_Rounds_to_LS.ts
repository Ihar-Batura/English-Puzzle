import getCompleteRoundsFromLS from './get_complete_rounds_from_LS';

function saveCompleteRoundsInLS(level?: number, round?: number): void {
  if (level !== undefined && round !== undefined) {
    const completeRounds: number[][] = getCompleteRoundsFromLS();
    if (!completeRounds[level].includes(round)) {
      completeRounds[level].push(round);
      localStorage.setItem(
        'UserPuzzleCompleteRounds',
        JSON.stringify(completeRounds)
      );
    }
  } else {
    const completeRounds = [[], [], [], [], [], []];
    localStorage.setItem(
      'UserPuzzleCompleteRounds',
      JSON.stringify(completeRounds)
    );
  }
}

export default saveCompleteRoundsInLS;
