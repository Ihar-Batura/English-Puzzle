function isLoginFormValid() {
  const inputsList: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('.login-input');

  const formBtn: HTMLButtonElement | null =
    document.querySelector('.login-btn');
  let counter: number = 0;

  inputsList.forEach((input) => {
    const inputIsValid: boolean = input.classList.value.includes('input-valid');
    if (inputIsValid) {
      counter += 1;
    }
  });

  if (formBtn) {
    if (counter === inputsList.length) {
      formBtn.removeAttribute('disabled');
    } else {
      formBtn.setAttribute('disabled', 'true');
    }
  }
}

export default isLoginFormValid;
