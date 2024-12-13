function mixPuzzles(): void {
  const answerRow: HTMLElement | null = document.getElementById('answer-row');
  const puzzlesList: NodeListOf<Element> = document.querySelectorAll(
    '.game-words .game-board__row-word'
  );
  const listLength: number = puzzlesList.length;
  const steps = Math.floor(listLength / 2);
  if (answerRow) {
    for (let i = 0; i < steps; i += 1) {
      if (Math.random() > 0.5) {
        answerRow.insertBefore(puzzlesList[i], puzzlesList[i + 2]);
        answerRow.insertBefore(puzzlesList[i + 1], puzzlesList[0]);
        answerRow.insertBefore(puzzlesList[i * 2], null);
      } else {
        answerRow.insertBefore(puzzlesList[i], null);
        answerRow.insertBefore(puzzlesList[i + 1], puzzlesList[i - 1]);
        answerRow.insertBefore(puzzlesList[i * 2], puzzlesList[0]);
      }
    }
  }
}

export default mixPuzzles;
