import getRoundResultsFromLS from './get_round_results_from_LS';
import createDiv from '../components/div';
import createButton from '../components/button';
import addListenerOnBtnPlayPageResults from './add_listener_click_btn_play_on_page_result';

async function getArrRoundData(level: string, round: string) {
  const filePath = `/data/wordCollectionLevel${level}.json`;
  const result = await fetch(filePath);
  const data = await result.json();
  const roundData = data.rounds[+round - 1];

  const roundResults = getRoundResultsFromLS();

  const resultImg: HTMLElement | null = document.querySelector('.result-img');
  if (resultImg) {
    resultImg.style.backgroundImage = `url(public/images/${roundData.levelData.cutSrc})`;
  }
  const resultImgInfo: HTMLElement | null = document.querySelector(
    '.result-img__description'
  );
  if (resultImgInfo) {
    resultImgInfo.innerText = `${roundData.levelData.name} ${roundData.levelData.author}`;
  }
  if (roundResults.length > 0) {
    const sectionKnow: HTMLElement | null =
      document.querySelector('.result-know');

    const sectionDontKnow: HTMLElement | null =
      document.querySelector('.result-dontknow');

    if (sectionKnow && sectionDontKnow) {
      for (let i = 0; i < roundResults.length; i += 1) {
        const resultItem = createDiv({
          className: 'result-item',
        });

        createButton({
          className: 'result-item__btn',
          id: `${roundData.words[i].audioExample}`,
          parent: resultItem,
        });
        createDiv({
          className: 'result-item__text',
          text: `${roundData.words[i].textExample}`,
          parent: resultItem,
        });
        if (roundResults[i][1] === true) {
          sectionKnow.append(resultItem);
        }
        if (roundResults[i][1] === false) {
          sectionDontKnow.append(resultItem);
        }
      }
    }
  }
  addListenerOnBtnPlayPageResults();
}

export default getArrRoundData;
