import createDiv from '../../components/div';
import createNewElement from '../../components/element';
import createButton from '../../components/button';
import deleteUserFromLS from '../../functional/delete_username_from_ls';

function createStartPage() {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) {
    const wrapper = createDiv({ className: 'wrapper' });

    const header = createNewElement({ tag: 'header', className: 'header' });

    const logo = createNewElement({
      tag: 'h1',
      className: 'logo',
      text: 'English Puzzles',
    });

    const btnLogout = createButton({
      className: 'logout-btn',
      text: 'Logout',
      onClick: () => deleteUserFromLS(),
    });

    header.append(logo, btnLogout);
    wrapper.append(header);

    body.append(wrapper);
  }
}

export default createStartPage;
