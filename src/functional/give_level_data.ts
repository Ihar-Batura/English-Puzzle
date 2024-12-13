//import showLevelData from './show_level_data';
import startRound from './start_round';
import cleanGameBoard from './clean_game_board';

import createSelectElement from '../components/select';

async function giveLevelData(levelNumber: string, roundNumber: string) {
  const filePath = `/data/wordCollectionLevel${levelNumber}.json`;
  const result = await fetch(filePath);
  const data = await result.json();

  const arrOfRounds = data.rounds;
  const roundsCount = data.roundsCount;

  createSelectElement({
    value: 'Round',
    options: roundsCount,
    id: 'round-btn',
    selected: roundNumber,
  });

  console.log(arrOfRounds[+roundNumber - 1]);

  cleanGameBoard();

  startRound(arrOfRounds[+roundNumber - 1], 0);
}

export default giveLevelData;
