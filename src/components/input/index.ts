import styles from './index.module.css';
import { InputProps } from './types';

function Input({
  type,
  id,
  className,
  title,
  required,
  placeholder,
  minLength,
  pattern,
  addRules,
  onInput,
  parent,
}: InputProps): HTMLInputElement {
  const input = document.createElement('input');

  input.setAttribute('type', type);
  if (id) {
    input.setAttribute('id', id);
  }
  input.classList.add(styles.input);
  if (className) {
    input.classList.add(className);
  }
  if (title) {
    input.setAttribute('title', title);
  }
  if (required) {
    input.setAttribute('required', '');
  }
  if (placeholder) {
    input.setAttribute('placeholder', placeholder);
  }
  if (minLength) {
    input.setAttribute('minlength', minLength);
  }
  if (pattern) {
    input.setAttribute('pattern', pattern);
  }
  if (addRules) {
    input.setAttribute('aria-describedby', addRules);
  }
  if (onInput) {
    input.oninput = onInput;
  }
  if (parent) {
    parent.append(input);
  }

  return input;
}

export default Input;
