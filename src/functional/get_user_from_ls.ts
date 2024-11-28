function getUserFromLS(): void {
  const user: string | null = localStorage.getItem('User');
  if (user) {
    const userData = JSON.parse(user);
    console.log(`Hello ${userData.name} ${userData.surname}`);
  }
}

export default getUserFromLS;
