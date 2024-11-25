import styles from './index.module.css';
import createLoginForm from '../form_login';

function createPageLogin(
  className?: string,
  parent?: HTMLElement | null
): HTMLElement {
  const pageLogin = document.createElement('section');

  pageLogin.classList.add(styles.section);
  if (className) {
    pageLogin.classList.add(className);
  }
  if (parent) {
    parent.append(pageLogin);
  }

  const form = createLoginForm();

  pageLogin.appendChild(form);

  return pageLogin;
}

export default createPageLogin;
