import styles from './index.module.css';
import { SpanProps } from './types';

function createSpan({
  id,
  className,
  text,
  parent,
}: SpanProps): HTMLSpanElement {
  const span = document.createElement('span');

  if (id) {
    span.setAttribute('id', id);
  }
  span.classList.add(styles.span);
  if (className) {
    span.classList.add(className);
  }
  if (text) {
    span.textContent = text;
  }
  if (parent) {
    parent.append(span);
  }

  return span;
}

export default createSpan;
