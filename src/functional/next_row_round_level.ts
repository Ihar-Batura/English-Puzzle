import whatLevelChoose from './what_level';
import whatRoundChoose from './what_round';
import startRound from './start_round';
import showLevelData from './show_level_data';
import giveLevelData from './give_level_data';
import transformBtn from './transform_button';

function nextRowRoundLevel() {
  const level: string = whatLevelChoose();
  const round: string = whatRoundChoose();
  const gameRow: number = document.querySelectorAll(
    '.game-board .game-board__row'
  ).length;
  console.log(round, gameRow);

  async function getRoundData(level: string, round: string, gameRow: number) {
    const filePath = `/data/wordCollectionLevel${level}.json`;
    const result = await fetch(filePath);
    const data = await result.json();
    const roundData = data.rounds[+round - 1];
    console.log(roundData);

    if (gameRow > 0 && gameRow <= 9) {
      startRound(roundData, gameRow);
    }
    if (gameRow > 9) {
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

  if (gameRow === 0) {
    giveLevelData(level, `${+round + 1}`);
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
