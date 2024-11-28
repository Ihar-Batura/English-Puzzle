import { ElementProps } from './type';

function createNewElement({
  tag,
  className,
  id,
  text,
  parent,
}: ElementProps): HTMLElement {
  const element = document.createElement(`${tag}`);

  if (className) {
    element.classList.add(className);
  }
  if (id) {
    element.id = id;
  }
  if (text) {
    element.textContent = text;
  }
  if (parent) {
    parent.append(element);
  }

  return element;
}

export default createNewElement;
