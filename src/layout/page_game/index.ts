import cleanMainContainer from '../../functional/clean_main_container';
import createHintsContainer from '../game_hints';
import createDiv from '../../components/div';

function createPageGame() {
  cleanMainContainer();
  const main: HTMLElement | null = document.querySelector('main');
  if (main) {
    const hintsContainer = createHintsContainer();
    const textHint = createDiv({
      className: 'text-hint',
      text: 'Здесь будет подсказка',
    });

    main.append(hintsContainer, textHint);
  }
}

export default createPageGame;
