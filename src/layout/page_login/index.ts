import styles from './index.module.css';
import createForm from '../../components/form';

const form = createForm({ className: 'page-login__form' });

function createPageLogin(
  className?: string,
  parent?: HTMLElement | null
): HTMLElement {
  const pageLogin = document.createElement('section');
  pageLogin.appendChild(form);

  pageLogin.classList.add(styles.section);
  if (className) {
    pageLogin.classList.add(className);
  }
  if (parent) {
    parent.append(pageLogin);
  }

  return pageLogin;
}

export default createPageLogin;

// import Button from './components/html_elements/button';
// import label from './components/html_elements/label';
// import InputName from './components/html_elements/input';

// Button({
//   className: 'Corol',
//   text: 'LogIn',
//   onClick: () => console.log('clicked'),
//   parent: container,
// });

// label({
//   forInput: 'FirstName',
//   text: 'Add your First Name',
//   parent: container,
// });

// InputName({
//   className: 'ga',
//   id: 'FirstName',
//   minLength: '3',
//   placeholder: 'FirstName',
//   parent: container,
// });

// label({
//   forInput: 'LastName',
//   text: 'Add your Last Name',
//   parent: container,
// });

// InputName({
//   className: 'ga',
//   id: 'LastName',
//   minLength: '4',
//   placeholder: 'LastName',
//   parent: container,
// });
