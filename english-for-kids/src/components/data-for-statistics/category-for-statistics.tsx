import { WordsStatistics, WordsWithStatistics } from "../../api/interfaces";
import { DataForStatistics } from "../../utils/dataForStatistics";
import { WordForStatistics } from "./word-for-statistics";

export const CategoryForStatistics = ({
  category,
  words,
  sortedWords,
  sortConfig,
}: WordsWithStatistics): JSX.Element => {
  const modifyWords: WordsStatistics[] = [];

  words.forEach((word) => {
    const el = JSON.parse(localStorage.getItem(`${word.word}`) as string);
    if (el) {
      modifyWords.push(el);
    } else {
      modifyWords.push({
        word: word.word,
        translation: word.translation,
        ...DataForStatistics,
        category,
      });
    }
  });

  if (sortedWords !== null) {
    modifyWords.sort((a, b) => {
      if (a[sortedWords] < b[sortedWords]) {
        return sortConfig === "ASC" ? -1 : 1;
      }
      if (a[sortedWords] > b[sortedWords]) {
        return sortConfig === "ASC" ? 1 : -1;
      }
      return 0;
    });
  }

  const wordsStat = modifyWords.map((x, i) => {
    return (
      <WordForStatistics
        key={i}
        category={category}
        word={x.word}
        translation={x.translation}
        clicksTrainMode={x.clicksTrainMode}
        succesGameMode={x.succesGameMode}
        wrongGameMode={x.wrongGameMode}
        percentCorrects={x.percentCorrects}
      />
    );
  });

  return <tbody>{wordsStat}</tbody>;
};
