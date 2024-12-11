import { Iwords } from './start_round';

function addAudio(words: Iwords[], numberRow: number): void {
  const audioPath: string = words[numberRow].audioExample;
  const body: HTMLBodyElement | null = document.querySelector('body');
  const oldAudio: HTMLAudioElement | null = document.querySelector('audio');
  if (body) {
    if (oldAudio) {
      oldAudio.remove();
    }
    const audio = new Audio(audioPath);
    body.append(audio);
  }
}

export default addAudio;
