import cleanMainContainer from '../../functional/clean_main_container';
import createHintsContainer from '../game_hints';
//import whatLevelChoosed from '../../functional/what_level';

function createPageGame() {
  cleanMainContainer();
  const main: HTMLElement | null = document.querySelector('main');
  if (main) {
    const hintsContainer = createHintsContainer();

    main.append(hintsContainer);

    // whatLevelChoosed();
  }
}

export default createPageGame;
