function cleanMainContainer() {
  const main: HTMLElement | null = document.querySelector('main');

  if (main) {
    main.innerHTML = '';
  }
}

export default cleanMainContainer;
