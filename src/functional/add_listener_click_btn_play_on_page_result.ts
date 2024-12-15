import playAudioOnResultsPage from './play_audio_results_page';

function addListenerOnBtnPlayPageResults() {
  const playBtnsList: NodeListOf<Element> =
    document.querySelectorAll('.result-item__btn');

  if (playBtnsList.length > 0) {
    playBtnsList.forEach((btn) => {
      btn.addEventListener('click', function (event) {
        if (event) {
          if (event.target) {
            playAudioOnResultsPage((event.target as HTMLButtonElement).id);
          }
        }
      });
    });
  }
}

export default addListenerOnBtnPlayPageResults;
