import Ilink from './type';
function createLinkElement({
  href,
  className,
  id,
  text,
  parent,
}: Ilink): HTMLAnchorElement {
  const a = document.createElement('a');

  a.href = href;

  if (className) {
    a.classList.add(className);
  }
  if (id) {
    a.id = id;
  }
  if (text) {
    a.textContent = text;
  }
  if (parent) {
    parent.append(a);
  }

  return a;
}

export default createLinkElement;