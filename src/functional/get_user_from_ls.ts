type UserObj = {
  name: string;
  surname: string;
};

function getUserFromLS(): UserObj | undefined {
  const user: string | null = localStorage.getItem('User');
  if (user) {
    const userData = JSON.parse(user);
    return userData;
  }
  return;
}

export default getUserFromLS;
