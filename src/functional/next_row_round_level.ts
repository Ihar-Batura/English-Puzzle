import whatLevelChoose from './what_level';
import whatRoundChoose from './what_round';
import startRound from './start_round';
import showLevelData from './show_level_data';
import giveLevelData from './give_level_data';
import transformBtn from './transform_button';
import nextRound from './next_round';
import saveLastRoundsInLS from './save_last_round_to_LS';
import saveCompleteRoundsInLS from './save_complete_Rounds_to_LS';

function nextRowRoundLevel() {
  const level: string = whatLevelChoose();
  const round: string = whatRoundChoose();
  const gameRow: number = document.querySelectorAll(
    '.game-board .game-board__row'
  ).length;

  async function getRoundData(level: string, round: string, gameRow: number) {
    const filePath = `/data/wordCollectionLevel${level}.json`;
    const result = await fetch(filePath);
    const data = await result.json();
    const roundData = data.rounds[+round - 1];

    if (gameRow > 0 && gameRow <= 9) {
      startRound(roundData, gameRow);
    }
    if (gameRow > 9) {
      saveCompleteRoundsInLS(+level - 1, +round - 1);
      showLevelData({
        author: roundData.levelData.author,
        cutSrc: roundData.levelData.cutSrc,
        id: roundData.levelData.id,
        imageSrc: roundData.levelData.imageSrc,
        name: roundData.levelData.name,
        year: roundData.levelData.year,
      });
    }
  }

  const nextLevelRound: string[] = nextRound(level, round);

  if (gameRow === 0) {
    giveLevelData(nextLevelRound[0], nextLevelRound[1]);
    saveLastRoundsInLS(nextLevelRound[0], nextLevelRound[1]);
    transformBtn('solution-btn', 'Solution');
    transformBtn('check-solution__btn', 'Check');
  } else {
    getRoundData(level, round, gameRow);
    if (gameRow <= 9) {
      transformBtn('check-solution__btn', 'Check');
    }
  }
}

export default nextRowRoundLevel;
