import createNewElement from '../../components/element';

function createMainSection(): HTMLElement {
  const main = createNewElement({ tag: 'main', className: 'main' });
  return main;
}

export default createMainSection;
