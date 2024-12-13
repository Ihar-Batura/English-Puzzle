import createDiv from '../../components/div';
import createButton from '../../components/button';
import isShowTextHint from '../../functional/show_text_hint';
import isShowSoundHint from '../../functional/show_sound_hint';
import createButtonsLevel from '../buttons_level';
import isShowPuzzlesBkg from '../../functional/is_show_puzzles_bg';
import playAudioHint from '../../functional/play_audio_hint';
import getUserHintSateFromLS from '../../functional/get_hits_state_from_ls';

function createHintsContainer() {
  const hintsContainer = createDiv({ className: 'hints-container' });
  const hintsState = getUserHintSateFromLS();

  createButtonsLevel(hintsContainer);

  const soundBtn = createButton({
    className: 'hint-btn',
    id: 'sound-btn',
    onClick: playAudioHint,
  });

  const translateBtn = createButton({
    className: 'hint-btn',
    id: 'translate-btn',
    onClick: isShowTextHint,
  });

  const audioBtn = createButton({
    className: 'hint-btn',
    id: 'audio-btn',
    onClick: isShowSoundHint,
  });

  const imageBtn = createButton({
    className: 'hint-btn',
    id: 'image-btn',
    onClick: isShowPuzzlesBkg,
  });

  if (hintsState) {
    if (hintsState.text === false) {
      translateBtn.classList.add('cliked');
    }
    if (hintsState.audio === false) {
      audioBtn.classList.add('cliked');
    }
    if (hintsState.image === false) {
      imageBtn.classList.add('cliked');
    }
  }
  hintsContainer.append(soundBtn, translateBtn, audioBtn, imageBtn);
  return hintsContainer;
}

export default createHintsContainer;
