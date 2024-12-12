function turnCheckBtn(): void {
  const answerRow: HTMLElement | null = document.getElementById('answer-row');
  const btnCheck: HTMLButtonElement | null = document.querySelector(
    '.check-solution__btn'
  );
  if (answerRow && btnCheck) {
    if (answerRow.childNodes.length < 1) {
      btnCheck.removeAttribute('disabled');
    } else {
      btnCheck.setAttribute('disabled', 'true');
    }
  }
}

export default turnCheckBtn;
