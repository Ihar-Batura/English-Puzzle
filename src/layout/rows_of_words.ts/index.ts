import createDiv from '../../components/div';
import { Iwords } from '../../functional/start_round';

function createWordRows(words: Iwords[]) {
  const gameFild: HTMLDivElement | null = document.querySelector('.game-board');
  if (gameFild) {
    gameFild.innerHTML = '';
    for (let i = 0; i < words.length; i += 1) {
      createDiv({ className: 'game-board__row', parent: gameFild });
    }
  }
}

export default createWordRows;
