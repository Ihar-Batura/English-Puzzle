import createDiv from '../../components/div';

function createStartPage() {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) {
    createDiv({ className: 'wrapper', parent: body });
  }
}

export default createStartPage;
