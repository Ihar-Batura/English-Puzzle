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

  const pictureBox: HTMLDivElement | null =
    document.querySelector('.game-board');
  if (pictureBox) {
    const windowWidth: number = window.innerWidth;
    if (windowWidth > 768) {
      pictureBox.style.backgroundImage = `url(public/images/${imageSrc})`; // нужно будет изменить public/images/ на /images/ пока так работает
    } else {
      pictureBox.style.backgroundImage = `url(public/images/${cutSrc})`;
    }
  }
  console.log(id); // временно, потом нужно подумать где использовать id
}

export default showLevelData;
