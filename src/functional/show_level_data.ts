import showPicture from './show_picture';
import makeHintBtnsDisabled from './make_hintBtns_disabled';
import transformBtn from './transform_button';
import cleanGameBoard from './clean_game_board';
import turnSolutionBtn from './turn_btn_solution';

export interface ILevelData {
  author: string;
  cutSrc: string;
  id: string;
  imageSrc: string;
  name: string;
  year: string;
}

function showLevelData({ author, cutSrc, imageSrc, name, year }: ILevelData) {
  const infoAboutPicture: HTMLDivElement | null =
    document.querySelector('.text-hint');
  if (infoAboutPicture) {
    infoAboutPicture.innerText = `${name} ${author} ${year}`;
  }
  cleanGameBoard();
  showPicture(cutSrc, imageSrc);
  makeHintBtnsDisabled('add');
  transformBtn('solution-btn', 'Results');
  turnSolutionBtn(false);
}

export default showLevelData;
