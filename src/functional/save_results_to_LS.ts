function saveResultsToLS(
  arrResults?: [] | [string, boolean][],
  newResult?: [string, boolean]
) {
  if (arrResults && newResult) {
    const arr = [...arrResults, newResult];
    localStorage.setItem('UserPuzzleResults', JSON.stringify(arr));
  } else {
    const results: string | boolean[] = [];
    localStorage.setItem('UserPuzzleResults', JSON.stringify(results));
  }
}

export default saveResultsToLS;
