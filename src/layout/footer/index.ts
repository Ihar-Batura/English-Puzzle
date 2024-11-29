import createNewElement from '../../components/element';
import createLinkElement from '../../components/link';

function createFooter() {
  const footer = createNewElement({ tag: 'footer', className: 'footer' });
  const year = createNewElement({
    tag: 'p',
    className: 'footer-text',
    text: '2024',
  });
  const gitLink = createLinkElement({
    href: 'https://github.com/Ihar-Batura',
    className: 'footer-link',
    text: 'Ihar Batura',
  });

  footer.append(year, gitLink);

  return footer;
}

export default createFooter;
