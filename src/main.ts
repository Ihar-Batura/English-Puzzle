import './style.css';
import createPageLogin from './layout/page_login';
import getUserFromLS from './functional/get_user_from_ls';
import cleanPage from './functional/clean_page';

const body = document.querySelector('body');

createPageLogin('page-login', body);

document.addEventListener('DOMContentLoaded', function () {
  if (getUserFromLS()) {
    cleanPage();
  }
});
