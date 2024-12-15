import whatLevelChoose from './what_level';
import whatRoundChoose from './what_round';
import getArrRoundData from './get_arr_with_round_data';

function addResultsToPageResults() {
  const level: string = whatLevelChoose();
  const round: string = whatRoundChoose();
  getArrRoundData(level, round);
}

export default addResultsToPageResults;
