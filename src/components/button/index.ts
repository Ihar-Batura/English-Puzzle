import styles from './index.module.css';
import { BtnOptions } from './types';

function Button({ className, text, onClick, parent }: BtnOptions): HTMLElement {
  const button = document.createElement('button');

  button.classList.add(styles.button);
  if (className) {
    button.classList.add(className);
  }
  button.onclick = onClick;
  button.textContent = text;

  if (parent) {
    parent.append(button);
  }

  return button;
}

export default Button;
