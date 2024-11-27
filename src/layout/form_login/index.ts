import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import Button from '../../components/button';
import Span from '../../components/span';
import isValidInput from '../../functional/check_form_input';

function createLoginForm() {
  const form = Form({ autocomplete: 'off', className: 'page-login__form' });

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
    addRules: 'name-minlength',
    onInput: () => isValidInput('name'),
    parent: form,
  });
  Span({
    id: 'name-minlength',
    className: 'login-span',
    text: 'Minimum 3 characters, the first letter is in uppercase',
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
    addRules: 'surname-minlength',
    onInput: () => isValidInput('surname'),
    parent: form,
  });
  Span({
    id: 'surname-minlength',
    className: 'login-span',
    text: 'Minimum 4 characters, the first letter is in uppercase',
    parent: form,
  });
  Button({
    className: 'login-btn',
    text: 'LogIn',
    disabled: true,
    onClick: () => console.log('clicked'),
    parent: form,
  });

  return form;
}

export default createLoginForm;
