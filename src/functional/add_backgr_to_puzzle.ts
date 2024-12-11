import { ILevelData } from './show_level_data';

function addBackgroundToPuzzle(levelData: ILevelData, rowNumber: number) {
  const row: HTMLDivElement | null = document.querySelector(
    `#row_${rowNumber}`
  );
  if (row) {
    const rowWidth: number = row.offsetWidth;
    const picturePath: string =
      rowWidth > 768 ? levelData.imageSrc : levelData.cutSrc;

    const rowItemsLength: number = row.childNodes.length;
    let bkPositionLeft: number = 0;
    let bkPositionTop: number = -40 * rowNumber;

    for (let i = 0; i < rowItemsLength; i += 1) {
      const rowItem: HTMLElement | null = document.getElementById(
        `${rowNumber}_${i}`
      );

      if (rowItem) {
        rowItem.style.backgroundImage = `url(public/images/${picturePath})`;
        rowItem.style.backgroundSize = `${rowWidth}px ${400}px`;
        rowItem.style.backgroundPosition = `left ${bkPositionLeft}px top ${bkPositionTop}px`;
        bkPositionLeft -= rowItem.offsetWidth;
      }
    }
  }
}

export default addBackgroundToPuzzle;
