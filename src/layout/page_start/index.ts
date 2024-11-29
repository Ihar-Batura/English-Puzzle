import createDiv from '../../components/div';
import createHeader from '../header';
import createFooter from '../footer';

function createStartPage() {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) {
    const wrapper = createDiv({ className: 'wrapper' });

    const header = createHeader();
    const footer = createFooter();

    wrapper.append(header, footer);

    body.append(wrapper);
  }
}

export default createStartPage;
