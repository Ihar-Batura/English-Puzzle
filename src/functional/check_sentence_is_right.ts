import transformBtn from './transform_button';
import deleteDraggableAndBk from './delete_draggable_and_bk';
import turnSolutionBtn from './turn_btn_solution';
import isShowTextHint from './show_text_hint';
import isShowSoundHint from './show_sound_hint';

function isSentenceRight(): void {
  const gameRows: NodeListOf<Element> =
    document.querySelectorAll('.game-board__row');

  const lastRowId: string | null = gameRows[gameRows.length - 1].id;
  const answerElements: NodeListOf<Element> = document.querySelectorAll(
    `#${lastRowId} .game-board__row-word`
  );

  let isCorrect = true;

  for (let i = 0; i < answerElements.length; i += 1) {
    const id: number = +answerElements[i].id.split('_')[1];
    if (id !== i) {
      isCorrect = false;
    }
  }

  if (isCorrect) {
    transformBtn('check-solution__btn', 'Continue');
    deleteDraggableAndBk();
    turnSolutionBtn(true);
    isShowTextHint(true);
    isShowSoundHint(true);
  }
}

export default isSentenceRight;
