interface IStartRound {
  cutSrc: string;
  id: string;
  imageSrc: string;
  words: object[];
}

function startRound({ cutSrc, id, imageSrc, words }: IStartRound) {
  const textHint: HTMLDivElement | null = document.querySelector('.text-hint');
  if (textHint) {
    console.log(textHint);
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
  console.log(words);
}

export default startRound;
