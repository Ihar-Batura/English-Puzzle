import styles from './index.module.css';
import { FormProps } from './types';

function createForm({
  autocomplete,
  className,
  parent,
}: FormProps): HTMLFormElement {
  const form = document.createElement('form');
  form.setAttribute('autocomplete', autocomplete);
  form.classList.add(styles.form);
  if (className) {
    form.classList.add(className);
  }
  if (parent) {
    parent.append(form);
  }

  return form;
}

export default createForm;
