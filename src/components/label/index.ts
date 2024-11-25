import styles from './index.module.css';
import { LabelProps } from './types';

function Label({
  forInput,
  text,
  className,
  parent,
}: LabelProps): HTMLLabelElement {
  const label = document.createElement('label');

  label.setAttribute('for', forInput);
  label.textContent = text;
  label.classList.add(styles.label);
  if (className) {
    label.classList.add(className);
  }

  if (parent) {
    parent.append(label);
  }

  return label;
}

export default Label;
