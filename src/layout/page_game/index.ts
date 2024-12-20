import cleanMainContainer from '../../functional/clean_main_container';
import createHintsContainer from '../game_hints';
import createDiv from '../../components/div';
import createSolutionButtons from '../buttons_solution';

function createPageGame() {
  cleanMainContainer();
  const main: HTMLElement | null = document.querySelector('main');
  if (main) {
    const hintsContainer = createHintsContainer();
    const textHint = createDiv({
      className: 'text-hint',
      text: '',
    });

    const gameBoard = createDiv({ className: 'game-board' });

    const gameWords = createDiv({ className: 'game-words', id: 'answer-row' });

    const solutionBtn = createSolutionButtons();

    main.append(hintsContainer, textHint, gameBoard, gameWords, solutionBtn);
  }
}

export default createPageGame;
