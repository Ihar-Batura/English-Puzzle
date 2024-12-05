function isBtnPush(btnId: string): void {
  const btn: HTMLButtonElement | null = document.querySelector(`#${btnId}`);
  if (btn) {
    btn.classList.toggle('cliked');
  }
}

export default isBtnPush;
