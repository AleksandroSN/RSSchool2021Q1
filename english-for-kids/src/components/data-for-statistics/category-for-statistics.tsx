import { WordsWithStatistics } from "../../api/interfaces";
import { sortStatistic } from "../../utils/sorter";
import { transformWords } from "./transformWords";
import { WordForStatistics } from "./word-for-statistics";

export const CategoryForStatistics = ({
  category,
  words,
  sortedWords,
  sortConfig,
}: WordsWithStatistics): JSX.Element => {
  const actualWords = transformWords(words, category);

  sortStatistic(sortedWords, sortConfig, actualWords);

  const wordsStat = actualWords.map((x, i) => {
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
