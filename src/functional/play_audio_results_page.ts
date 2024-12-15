function playAudioOnResultsPage(path: string) {
  const audioFile: HTMLAudioElement | null = document.querySelector('audio');

  if (audioFile) {
    audioFile.src = `${path}`;
    audioFile.play();
  }
}

export default playAudioOnResultsPage;
