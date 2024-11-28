import styles from './index.module.css';
import { DivProps } from './types';

function createDiv({ className, id, text, parent }: DivProps): HTMLDivElement {
  const div = document.createElement('div');

  div.classList.add(styles.div);
  if (className) {
    div.classList.add(className);
  }
  if (id) {
    div.id = id;
  }
  if (text) {
    div.textContent = text;
  }
  if (parent) {
    parent.append(div);
  }

  return div;
}

export default createDiv;
