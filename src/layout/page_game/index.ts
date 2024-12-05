import cleanMainContainer from '../../functional/clean_main_container';
import createHintsContainer from '../game_hints';
import createDiv from '../../components/div';
import createGameBoard from '../game_board';

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

    main.append(hintsContainer, textHint, gameBoard);
  }
}

export default createPageGame;
