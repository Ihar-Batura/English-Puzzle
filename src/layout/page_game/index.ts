import cleanMainContainer from '../../functional/clean_main_container';
import createHintsContainer from '../game_hints';
import createDiv from '../../components/div';
import createGameBoard from '../game_board';
import createSolutionButtons from '../buttons_solution';

function createPageGame() {
  cleanMainContainer();
  const main: HTMLElement | null = document.querySelector('main');
  if (main) {
    const hintsContainer = createHintsContainer();
    const textHint = createDiv({
      className: 'text-hint',
      text: 'Здесь будет подсказка',
    });

    const gameBoard = createGameBoard();

    const gameWords = createDiv({ className: 'game-words' });

    const solutionBtn = createSolutionButtons();

    main.append(hintsContainer, textHint, gameBoard, gameWords, solutionBtn);
  }
}

export default createPageGame;
