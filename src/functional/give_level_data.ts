async function giveLevelData(levelNumber: string) {
  const filePath = `/data/wordCollectionLevel${levelNumber}.json`;
  const result = await fetch(filePath);
  const data = await result.json();

  console.log(data);
}

export default giveLevelData;
