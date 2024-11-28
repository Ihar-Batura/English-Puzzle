import cleanPage from './clean_page';

function deleteUserFromLS(): void {
  localStorage.removeItem('User');
  cleanPage();
}

export default deleteUserFromLS;
