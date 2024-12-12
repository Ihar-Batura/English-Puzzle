function dragDropItems(rowNumber: number) {
  const firstContainer: HTMLElement | null =
    document.getElementById('answer-row');

  const secondContainer: HTMLElement | null = document.getElementById(
    `row_${rowNumber}`
  );

  const puzzleItems: NodeListOf<Element> = document.querySelectorAll(
    '.game-words .game-board__row-word'
  );

  puzzleItems.forEach((element) => {
    element.addEventListener('dragstart', (event) => {
      dragStart(event);
      //DragEvent
    });
    element.addEventListener('click', function () {
      if (firstContainer && secondContainer) {
        if (element.parentElement === firstContainer) {
          secondContainer.append(element);
        } else {
          firstContainer.append(element);
        }
      }
    });
  });

  if (firstContainer && secondContainer) {
    firstContainer.addEventListener('dragover', (event) => {
      dragOver(event);
    });
    firstContainer.addEventListener('drop', (event) => {
      drop(event);
    });

    secondContainer.addEventListener('dragover', (event) => {
      dragOver(event);
    });
    secondContainer.addEventListener('drop', (event) => {
      drop(event);
    });
  }

  function dragOver(event: DragEvent): void {
    event.preventDefault();
  }
  // Нужно будет разобраться как типизировать DragEvent

  function dragStart(event: any): void {
    event.dataTransfer.setData('id', event.target.id);
    dragOverStart();
  }

  function drop(event: any): void {
    let itemId = event.dataTransfer.getData('id');
    console.log(itemId);
    if (
      event.target.id === 'answer-row' ||
      event.target.id === `row_${rowNumber}`
    ) {
      event.target.append(document.getElementById(itemId));
    }
    dragOverEnd();
  }

  function dragOverStart(): void {
    if (firstContainer && secondContainer) {
      firstContainer.style.backgroundColor = 'rgba(186, 186, 235, 0.4)';
      secondContainer.style.backgroundColor = 'rgba(186, 186, 235, 0.4)';
    }
  }

  function dragOverEnd(): void {
    if (firstContainer && secondContainer) {
      firstContainer.style.backgroundColor = 'transparent';
      secondContainer.style.backgroundColor = 'transparent';
    }
  }
}

export default dragDropItems;
