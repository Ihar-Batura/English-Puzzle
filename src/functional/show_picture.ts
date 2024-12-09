function showPicture(cutSrc: string, imageSrc: string): void {
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
}

export default showPicture;
