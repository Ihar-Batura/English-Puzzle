import showPicture from './show_picture';

interface ILevelData {
  author: string;
  cutSrc: string;
  id: string;
  imageSrc: string;
  name: string;
  year: string;
}

function showLevelData({
  author,
  cutSrc,
  id,
  imageSrc,
  name,
  year,
}: ILevelData) {
  const infoAboutPicture: HTMLDivElement | null =
    document.querySelector('.text-hint');
  if (infoAboutPicture) {
    infoAboutPicture.innerText = `${name} ${author} ${year}`;
  }

  showPicture(cutSrc, imageSrc);
  console.log(id); // временно, потом нужно подумать где использовать id
}

export default showLevelData;
