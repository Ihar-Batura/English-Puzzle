import styles from './index.module.css';
import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import Button from '../../components/button';

const form = Form({ autocomplete: 'off', className: 'page-login__form' });

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

  pageLogin.appendChild(form);

  Label({
    forInput: 'name',
    text: 'First Name',
    className: 'login-label',
    parent: form,
  });
  Input({
    type: 'text',
    id: 'name',
    className: 'login-input',
    title: 'Enter First Name (only latin letters and the hyphen (-) symbol)',
    required: ' ',
    minLength: '3',
    pattern: '[A-Z]{1}[a-z\\-]{2,25}',
    parent: form,
  });
  Label({
    forInput: 'surname',
    text: 'Last Name',
    className: 'login-label',
    parent: form,
  });
  Input({
    type: 'text',
    id: 'surname',
    className: 'login-input',
    title: 'Enter Last Name (only latin letters and the hyphen (-) symbol)',
    required: ' ',
    minLength: '4',
    pattern: '[A-Z]{1}[a-z\\-]{3,25}',
    parent: form,
  });
  Button({
    className: 'login-btn',
    text: 'LogIn',
    disabled: true,
    onClick: () => console.log('clicked'),
    parent: form,
  });

  return pageLogin;
}

export default createPageLogin;
