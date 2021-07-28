import { WordsStatistics } from "../../api/interfaces";
import { tableDatas } from "../../utils/propsInArr";

export const WordForStatistics = (props: WordsStatistics): JSX.Element => {
  const arrTableData = tableDatas(props).map((e) => <td>{e}</td>);

  return <tr className="table__row">{arrTableData}</tr>;
};
