function whatLevelChoose(): string {
  const levelBtn: HTMLSelectElement | null =
    document.querySelector('#level-btn');
  if (levelBtn) {
    const level = levelBtn.value;
    //console.log(level);
    return level;
  } else {
    return '1';
  }
}

export default whatLevelChoose;
