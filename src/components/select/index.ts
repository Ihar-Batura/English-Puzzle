import { SelectProps } from './types';

function createSelectElement({
  value,
  options,
  id,
  className,
  name,
}: SelectProps): HTMLSelectElement {
  let select: HTMLSelectElement | null = document.querySelector(`#${id}`);

  if (!select) {
    select = document.createElement('select');
    if (className) {
      select.classList.add(className);
    }
    if (id) {
      select.id = id;
    }
    if (name) {
      select.setAttribute('name', name);
    }
    if (options > 0) {
      for (let i = 1; i <= options; i += 1) {
        const option = document.createElement('option');
        option.setAttribute('value', `${i}`);
        if (value) {
          option.innerText = `${value} ${i}`;
        }
        select.append(option);
      }
    }
  } else {
    select.innerHTML = '';
    if (options > 0) {
      for (let i = 1; i <= options; i += 1) {
        const option = document.createElement('option');
        option.setAttribute('value', `${i}`);
        if (value) {
          option.innerText = `${value} ${i}`;
        }
        select.append(option);
      }
    }
  }

  return select;
}

export default createSelectElement;
