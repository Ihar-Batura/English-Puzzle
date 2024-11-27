function isValidInput(id: string): void {
  const fieldInput: HTMLInputElement | null = document.querySelector(`#${id}`);
  const errorSpan: HTMLSpanElement | null = document.querySelector(
    `#${id}-minlength`
  );

  if (fieldInput && errorSpan) {
    const valueLength: number = fieldInput.value.length;
    const valueIsValid: boolean = fieldInput.validity.valid;
    if (valueLength > 0) {
      if (valueIsValid) {
        fieldInput.classList.remove('input-invalid');
        errorSpan.classList.remove('input-error');
        fieldInput.classList.add('input-valid');
      } else {
        fieldInput.classList.remove('input-valid');
        fieldInput.classList.add('input-invalid');
        errorSpan.classList.add('input-error');
      }
    }
  }
}

export default isValidInput;
