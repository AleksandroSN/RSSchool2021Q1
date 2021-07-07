import { WordsStatistics } from "../../api/interfaces";

export const WordForStatistics = ({
  category,
  word,
  translation,
  clicksTrainMode,
  succesGameMode,
  wrongGameMode,
  percentCorrects,
}: WordsStatistics): JSX.Element => {
  return (
    <tr className="table__row">
      <td>{category}</td>
      <td>{word}</td>
      <td>{translation}</td>
      <td>{clicksTrainMode}</td>
      <td>{succesGameMode}</td>
      <td>{wrongGameMode}</td>
      <td>{percentCorrects}%</td>
    </tr>
  );
};
