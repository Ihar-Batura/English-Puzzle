function turnSolutionBtn(value: boolean): void {
  const btnSolution: HTMLButtonElement | null =
    document.querySelector('.solution-btn');
  if (btnSolution) {
    if (value) {
      btnSolution.setAttribute('disabled', 'true');
    } else {
      btnSolution.removeAttribute('disabled');
    }
  }
}

export default turnSolutionBtn;
