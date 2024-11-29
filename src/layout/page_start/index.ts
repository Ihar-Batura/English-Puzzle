import createDiv from '../../components/div';
import createHeader from '../header';
import createMainSection from '../main';
import createNewElement from '../../components/element';
import createFooter from '../footer';
import getUserFromLS from '../../functional/get_user_from_ls';
import createButton from '../../components/button';

function createStartPage() {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) {
    const wrapper = createDiv({ className: 'wrapper' });

    const header = createHeader();
    const main = createMainSection();
    const userData = getUserFromLS();

    if (userData !== undefined) {
      const guestName: string = userData.name;
      const guestSurname: string = userData.surname;
      createNewElement({
        tag: 'h3',
        text: `Hello, ${guestName} ${guestSurname}`,
        className: 'greetin-text',
        parent: main,
      });
    }
    createNewElement({
      tag: 'div',
      text: `Learn English fun with English Puzzles! Here you will find interesting tasks of different difficulty levels. You need to assemble sentences from words and solve exciting puzzles. There are a lot of different tips)`,
      className: 'rules-text',
      parent: main,
    });

    createButton({ className: 'start-btn', text: 'Start', parent: main });

    const footer = createFooter();

    wrapper.append(header, main, footer);

    body.append(wrapper);
  }
}

export default createStartPage;
