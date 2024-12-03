function createSelectElement(
  value: string,
  options: number,
  className?: string,
  name?: string
): HTMLSelectElement {
  const select = document.createElement('select');
  if (className) {
    select.classList.add(className);
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

  return select;
}

export default createSelectElement;
