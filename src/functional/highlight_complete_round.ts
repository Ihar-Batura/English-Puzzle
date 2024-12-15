import whatLevelChoose from './what_level';
import getCompleteRoundsFromLS from './get_complete_rounds_from_LS';

function highlightCompleteRound() {
  const level: string = whatLevelChoose();
  const completeRounds: number[][] = getCompleteRoundsFromLS();

  const rounds: NodeListOf<Element> =
    document.querySelectorAll('#round-btn option');

  if (rounds.length > 0) {
    for (let i = 0; i < rounds.length; i += 1) {
      if (completeRounds[+level - 1].includes(i)) {
        rounds[i].classList.add('complete');
      }
    }
  }
}

export default highlightCompleteRound;
