function deletePageResults(): void {
  const pageResult = document.querySelector('.page-result');

  if (pageResult) {
    pageResult.remove();
  }
}

export default deletePageResults;
