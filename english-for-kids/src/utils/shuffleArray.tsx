import { Card } from "../api/interfaces";

export const shuffleArray = (array: Card[]): Card[] => {
  const gameArr = [...array];
  for (let i = gameArr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [gameArr[i], gameArr[j]] = [gameArr[j], gameArr[i]];
  }
  return gameArr;
};
