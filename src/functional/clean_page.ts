function cleanPage(): void {
  const body: HTMLBodyElement | null = document.querySelector('body');
  if (body) {
    body.innerHTML = '';
  }
}

export default cleanPage;
