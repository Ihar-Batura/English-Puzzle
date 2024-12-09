import showPicture from './show_picture';
import makeHintBtnsDisabled from './make_hintBtns_disabled';
import transformBtn from './transform_button';

interface ILevelData {
  author: string;
  cutSrc: string;
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

  showPicture(cutSrc, imageSrc);
  makeHintBtnsDisabled('add');
  transformBtn('solution-btn', 'Results');
  transformBtn('check-solution__btn', 'Continue'); // нужно добавить стили для выделения кнопки с результатами
}

export default showLevelData;
