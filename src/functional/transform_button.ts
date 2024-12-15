function transformBtn(
  className: string,
  text: string,
  addClass?: string
): void {
  const btn: HTMLButtonElement | null = document.querySelector(`.${className}`);
  if (btn) {
    btn.innerText = `${text}`;
    if (addClass) {
      btn.classList.add(`${addClass}`);
    }
  }
}

export default transformBtn;
