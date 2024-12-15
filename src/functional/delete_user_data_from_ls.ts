import cleanPage from './clean_page';

function deleteUserDataFromLS(): void {
  localStorage.removeItem('UserPuzzle');
  localStorage.removeItem('UserPuzzleCompleteRounds');
  localStorage.removeItem('UserPuzzleHintsState');
  localStorage.removeItem('UserPuzzleLastRound');

  cleanPage();
}

export default deleteUserDataFromLS;
