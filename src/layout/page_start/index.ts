import createDiv from '../../components/div';

import createHeader from '../header';

function createStartPage() {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) {
    const wrapper = createDiv({ className: 'wrapper' });

    const header = createHeader();

    wrapper.append(header);

    body.append(wrapper);
  }
}

export default createStartPage;
