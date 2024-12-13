function saveHintsSateInLs(): void {
  const userPuzzleHintsState = {
    audio: true,
    text: true,
    image: true,
  };
  localStorage.setItem(
    'UserPuzzleHintsState',
    JSON.stringify(userPuzzleHintsState)
  );
}

export default saveHintsSateInLs;
