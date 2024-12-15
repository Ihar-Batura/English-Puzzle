function deleteDraggableAndBk(): void {
  const gameRows: NodeListOf<Element> =
    document.querySelectorAll('.game-board__row');

  const lastRowId: string | null = gameRows[gameRows.length - 1].id;
  const answerElements: NodeListOf<Element> = document.querySelectorAll(
    `#${lastRowId} .game-board__row-word`
  );

  answerElements.forEach((el) => {
    el.removeAttribute('draggable');
    el.classList.remove('image-hint-active');
  });
}

export default deleteDraggableAndBk;
