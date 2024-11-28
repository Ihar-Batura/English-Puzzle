import createForm from '../../components/form';
import createLabel from '../../components/label';
import createInput from '../../components/input';
import createButton from '../../components/button';
import createSpan from '../../components/span';
import isValidInput from '../../functional/check_form_input';
import saveUserInLS from '../../functional/save_username_in_ ls';

function createLoginForm() {
  const form = createForm({
    autocomplete: 'off',
    className: 'page-login__form',
  });

  createLabel({
    forInput: 'name',
    text: 'First Name',
    className: 'login-label',
    parent: form,
  });
  createInput({
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
  createSpan({
    id: 'name-minlength',
    className: 'login-span',
    text: 'Minimum 3 characters, the first letter is in uppercase',
    parent: form,
  });
  createLabel({
    forInput: 'surname',
    text: 'Last Name',
    className: 'login-label',
    parent: form,
  });
  createInput({
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
  createSpan({
    id: 'surname-minlength',
    className: 'login-span',
    text: 'Minimum 4 characters, the first letter is in uppercase',
    parent: form,
  });
  createButton({
    className: 'login-btn',
    text: 'LogIn',
    disabled: true,
    onClick: () => saveUserInLS(),
    parent: form,
  });

  return form;
}

export default createLoginForm;
