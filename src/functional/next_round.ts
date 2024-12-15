function nextRound(lastLevel: string, lastRound: string): string[] {
  let result: string[] = [];
  let level: string | undefined;
  let round: string | undefined;

  if (+lastLevel === 1 && +lastRound < 45) {
    level = '1';
    round = `${+lastRound + 1}`;
  }
  if (+lastLevel === 1 && +lastRound === 45) {
    level = '2';
    round = '1';
  }
  if (+lastLevel === 2 && +lastRound < 41) {
    level = '2';
    round = `${+lastRound + 1}`;
  }
  if (+lastLevel === 2 && +lastRound === 41) {
    level = '3';
    round = '1';
  }
  if (+lastLevel === 3 && +lastRound < 40) {
    level = '3';
    round = `${+lastRound + 1}`;
  }
  if (+lastLevel === 3 && +lastRound === 40) {
    level = '4';
    round = '1';
  }
  if (+lastLevel === 4 && +lastRound < 29) {
    level = '4';
    round = `${+lastRound + 1}`;
  }
  if (+lastLevel === 4 && +lastRound === 29) {
    level = '5';
    round = '1';
  }
  if (+lastLevel === 5 && +lastRound < 29) {
    level = '5';
    round = `${+lastRound + 1}`;
  }
  if (+lastLevel === 5 && +lastRound === 29) {
    level = '6';
    round = '1';
  }
  if (+lastLevel === 6 && +lastRound < 25) {
    level = '6';
    round = `${+lastRound + 1}`;
  }
  if (+lastLevel === 6 && +lastRound === 25) {
    level = '1';
    round = '1';
  }
  if (level && round) {
    result.push(level);
    result.push(round);
  }

  return result;
}
export default nextRound;
