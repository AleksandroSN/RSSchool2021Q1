import { Card, WordsStatistics } from "../../api/interfaces";
import { DataForStatistics } from "../../utils/dataForStatistics";

export const transformWords = (
  arr: Card[],
  category: string
): WordsStatistics[] => {
  const copyArr: WordsStatistics[] = [...arr];
  const wordsStatistics: WordsStatistics[] = copyArr.map((el) => {
    const wordFromLocalStorage = JSON.parse(
      localStorage.getItem(`${el.word}`) as string
    );
    const wordFromArr = {
      word: el.word,
      translation: el.translation,
      ...DataForStatistics,
      category,
    };

    /* eslint-disable */
    return wordFromLocalStorage
      ? (el = wordFromLocalStorage)
      : (el = wordFromArr);
    /* eslint-enable */
  });

  return wordsStatistics;
};
