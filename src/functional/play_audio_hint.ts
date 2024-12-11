function playAudioHint() {
  const audioFile: HTMLAudioElement | null = document.querySelector('audio');
  const imgAudio: HTMLButtonElement | null =
    document.querySelector('#sound-btn');

  if (audioFile) {
    audioFile.play();
    if (imgAudio) {
      imgAudio.classList.add('shake');
      audioFile.addEventListener('ended', () => {
        imgAudio.classList.remove('shake');
      });
    }
  }
}

export default playAudioHint;
