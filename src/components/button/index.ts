import styles from './index.module.css';
import { BtnProps } from './types';

function createButton({
  className,
  text,
  disabled,
  onClick,
  parent,
}: BtnProps): HTMLElement {
  const button = document.createElement('button');

  button.classList.add(styles.button);
  if (className) {
    button.classList.add(className);
  }
  if (text) {
    button.textContent = text;
  }
  if (disabled) {
    button.setAttribute('disabled', ' ');
  }
  if (onClick) {
    button.onclick = onClick;
  }
  if (parent) {
    parent.append(button);
  }

  return button;
}

export default createButton;
