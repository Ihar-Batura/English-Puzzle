import styles from './index.module.css';
import { typeSection } from './types';

function section({ className, parent }: typeSection): HTMLElement {
  const section = document.createElement('section');

  section.classList.add(styles.section);
  if (className) {
    section.classList.add(className);
  }
  if (parent) {
    parent.append(section);
  }

  return section;
}

export default section;
