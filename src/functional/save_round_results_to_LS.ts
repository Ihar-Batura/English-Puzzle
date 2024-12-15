function saveResultsToLS(
  arrResults?: [] | [number, boolean][],
  newResult?: [number, boolean]
): void {
  if (arrResults && newResult) {
    const roundRowNumber: number = newResult[0];
    let flag = false;
    arrResults.forEach((arrItem) => {
      if (arrItem.includes(roundRowNumber)) {
        flag = true;
      }
    });
    if (flag === false) {
      const arr = [...arrResults, newResult];
      localStorage.setItem('UserPuzzleResults', JSON.stringify(arr));
    }
  } else {
    const results: [] = [];
    localStorage.setItem('UserPuzzleResults', JSON.stringify(results));
  }
}

export default saveResultsToLS;
