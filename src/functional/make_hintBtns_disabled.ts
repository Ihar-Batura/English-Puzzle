function makeHintBtnsDisabled(action: string): void {
  const arrHintBtns: NodeListOf<Element> =
    document.querySelectorAll('.hint-btn');
  if (arrHintBtns) {
    arrHintBtns.forEach((btn) => {
      if (action === 'delete') {
        btn.removeAttribute('disabled');
      }
      if (action === 'add') {
        btn.setAttribute('disabled', 'true');
      }
    });
  }
}

export default makeHintBtnsDisabled;
