import createPageLogin from '../layout/page_login';
import createStartPage from '../layout/page_start';

function cleanPage(): void {
  const body: HTMLBodyElement | null = document.querySelector('body');

  const isPageLogin: HTMLElement | null = document.querySelector('.page-login');

  if (body) {
    body.innerHTML = '';
    isPageLogin ? createStartPage() : createPageLogin('page-login', body);
  }
}

export default cleanPage;
