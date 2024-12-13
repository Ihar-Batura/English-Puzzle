import getUserHintSateFromLS from './get_hits_state_from_ls';
import saveHintsSateInLs from './save_hints_state_in_LS';

function isBtnPush(btnId: string): void {
  const btn: HTMLButtonElement | null = document.querySelector(`#${btnId}`);
  const hintState = getUserHintSateFromLS();
  if (btn && hintState) {
    btn.classList.toggle('cliked');
    console.log(hintState);
    console.log(btn);
    if (btnId === 'translate-btn' && hintState.text === true) {
      saveHintsSateInLs({
        audio: hintState.audio,
        text: false,
        image: hintState.image,
      });
    }
    if (btnId === 'translate-btn' && hintState.text === false) {
      saveHintsSateInLs({
        audio: hintState.audio,
        text: true,
        image: hintState.image,
      });
    }
    if (btnId === 'audio-btn' && hintState.audio === true) {
      saveHintsSateInLs({
        audio: false,
        text: hintState.text,
        image: hintState.image,
      });
    }
    if (btnId === 'audio-btn' && hintState.audio === false) {
      saveHintsSateInLs({
        audio: true,
        text: hintState.text,
        image: hintState.image,
      });
    }
    if (btnId === 'image-btn' && hintState.image === true) {
      saveHintsSateInLs({
        audio: hintState.audio,
        text: hintState.text,
        image: false,
      });
    }
    if (btnId === 'image-btn' && hintState.image === false) {
      saveHintsSateInLs({
        audio: hintState.audio,
        text: hintState.text,
        image: true,
      });
    }
  }
}

export default isBtnPush;
