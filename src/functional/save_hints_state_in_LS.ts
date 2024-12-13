export type THintsState = {
  audio: boolean;
  text: boolean;
  image: boolean;
};

function saveHintsSateInLs({
  audio = true,
  text = true,
  image = true,
}: THintsState): void {
  const userPuzzleHintsState = {
    audio: audio,
    text: text,
    image: image,
  };
  localStorage.setItem(
    'UserPuzzleHintsState',
    JSON.stringify(userPuzzleHintsState)
  );
}

export default saveHintsSateInLs;
