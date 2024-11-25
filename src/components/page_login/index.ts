import styles from './index.module.css';

function createPageLogin(
  className?: string,
  parent?: HTMLElement
): HTMLDivElement {
  const pageLogin = document.createElement('div');

  pageLogin.classList.add(styles.div);
  if (className) {
    pageLogin.classList.add(className);
  }
  if (parent) {
    parent.append(pageLogin);
  }

  return pageLogin;
}

export default createPageLogin;
