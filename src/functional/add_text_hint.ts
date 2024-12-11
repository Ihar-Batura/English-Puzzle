import { Iwords } from './start_round';

function addTextHint(words: Iwords[], numberRow: number): void {
  const text: HTMLDivElement | null = document.querySelector('.text-hint');
  if (text) {
    text.innerText = '';
    text.innerText = words[numberRow].textExampleTranslate;
  }
}

export default addTextHint;
