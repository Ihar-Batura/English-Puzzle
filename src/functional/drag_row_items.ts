function dragRowItem(rowNumber: number) {
  const rowElements: ChildNode | undefined = document.querySelector(
    `#row_${rowNumber}`
  )?.childNodes[0];

  const rowAnswers: HTMLDivElement | null =
    document.querySelector('.game-words');

  function dragStart(): void {
    console.log('dragStart');
  }

  function dragEnd(): void {
    console.log('dragEnd');
  }

  function dragEnter(event: any): void {
    console.log('dragEvent', event);
    event.preventDefault();
    console.log('dragEnter');
  }

  function dragLeave(): void {
    console.log('dragLeave');
  }

  function dragOver(event: any): void {
    console.log('dragOver', event);
    event.preventDefault();
    console.log('dragOver');
  }

  function drop(): void {
    if (rowAnswers) {
      if (rowElements) {
        rowAnswers.append(rowElements);
      }
    }

    console.log('drop');
  }

  // if (rowElements) {
  //   rowElements.forEach((el) => {
  //     el.addEventListener('dragstart', dragStart);
  //     el.addEventListener('dragend', dragEnd);
  //   });
  // }
  if (rowAnswers) {
    rowAnswers.addEventListener('dragenter', dragEnter);
    rowAnswers.addEventListener('dragleave', dragLeave);
    rowAnswers.addEventListener('dragover', dragOver);
    rowAnswers.addEventListener('drop', drop);
  }
}

export default dragRowItem;
