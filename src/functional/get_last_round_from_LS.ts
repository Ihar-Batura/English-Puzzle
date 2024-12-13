function getUserLastRoundFromLS(): string[] | undefined {
  const userLastRound: string | null = localStorage.getItem(
    'UserPuzzleLastRound'
  );
  if (userLastRound) {
    const userLastRoundData = JSON.parse(userLastRound);
    return userLastRoundData;
  }
  return;
}

export default getUserLastRoundFromLS;
