import cleanPage from './clean_page';

function saveUserInLS(): void {
  const name: HTMLInputElement | null = document.querySelector('#name');
  const surname: HTMLInputElement | null = document.querySelector('#surname');

  if (name && surname) {
    const user = {
      name: `${name.value}`,
      surname: `${surname.value}`,
    };
    localStorage.setItem('User', JSON.stringify(user));
    cleanPage();
  }
}

export default saveUserInLS;
