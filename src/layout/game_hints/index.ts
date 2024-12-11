import createDiv from '../../components/div';
import createButton from '../../components/button';
import isShowTextHint from '../../functional/show_text_hint';
import isShowSoundHint from '../../functional/show_sound_hint';
import createButtonsLevel from '../buttons_level';
import isShowPuzzlesBkg from '../../functional/is_show_puzzles_bg';
import playAudioHint from '../../functional/play_audio_hint';

function createHintsContainer() {
  const hintsContainer = createDiv({ className: 'hints-container' });

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

  hintsContainer.append(soundBtn, translateBtn, audioBtn, imageBtn);
  return hintsContainer;
}

export default createHintsContainer;
