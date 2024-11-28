import cleanPage from './clean_page';

function getUserFromLS(): void {
  const user: string | null = localStorage.getItem('User');
  if (user) {
    const userData = JSON.parse(user);
    console.log(`Hello ${userData.name} ${userData.surname}`);
    cleanPage();
  }
}

export default getUserFromLS;
