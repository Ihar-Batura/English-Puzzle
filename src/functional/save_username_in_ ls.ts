import cleanPage from './clean_page';
import saveCompleteRoundsInLS from './save_complete_Rounds_to_LS';
import saveHintsSateInLs from './save_hints_state_in_LS';
import saveLastRoundsInLS from './save_last_round_to_LS';

function saveUserInLS(): void {
  const name: HTMLInputElement | null = document.querySelector('#name');
  const surname: HTMLInputElement | null = document.querySelector('#surname');

  if (name && surname) {
    const user = {
      name: `${name.value}`,
      surname: `${surname.value}`,
    };
    localStorage.setItem('UserPuzzle', JSON.stringify(user));
    saveCompleteRoundsInLS();
    saveHintsSateInLs({ audio: true, text: true, image: true });
    saveLastRoundsInLS();
    cleanPage();
  }
}

export default saveUserInLS;
