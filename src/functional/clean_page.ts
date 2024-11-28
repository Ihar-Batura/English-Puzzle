import createStartPage from '../layout/page_start';

function cleanPage(): void {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) {
    body.innerHTML = '';
    createStartPage();
  }
}

export default cleanPage;
