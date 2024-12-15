import getRoundResultsFromLS from './get_round_results_from_LS';
import saveResultsToLS from './save_round_results_to_LS';

function showSolution(): void {
  const gameRows: NodeListOf<Element> =
    document.querySelectorAll('.game-board__row');

  const lastGameRowId: string | null = gameRows[gameRows.length - 1].id;
  const row: HTMLElement | null = document.getElementById(`${lastGameRowId}`);
  const answerRowPuzzles: NodeListOf<Element> = document.querySelectorAll(
    '#answer-row .game-board__row-word'
  );

  if (row) {
    if (answerRowPuzzles.length > 0) {
      answerRowPuzzles.forEach((puzzle) => {
        row.append(puzzle);
      });
    }

    const answerElements: NodeListOf<Element> = document.querySelectorAll(
      `#${lastGameRowId} .game-board__row-word`
    );

    for (let i = 0; i < answerElements.length; i += 1) {
      for (let j = 0; j < answerElements.length; j += 1) {
        const puzzlePosition: number = +answerElements[j].id.split('_')[1];
        if (puzzlePosition === i) {
          row.append(answerElements[j]);
        }
      }
    }
  }

  const arrRoundResults = getRoundResultsFromLS();
  const round = +lastGameRowId.split('_')[1];
  const newResult: [number, boolean] = [round, false];

  saveResultsToLS(arrRoundResults, newResult);
}

export default showSolution;
