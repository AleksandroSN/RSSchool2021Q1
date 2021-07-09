import { useState } from "react";
import DummyServer from "../../api/dummyMocks";
import { Data } from "../../api/interfaces";
import { Button } from "../../components/buttons/buttons";
import { CategoryForStatistics } from "../../components/data-for-statistics/category-for-statistics";
import { arrTableHeaders } from "../../utils/arrTableHeaders";
import "./statistics-page.scss";

export const StatisticsPage = (): JSX.Element => {
  const [result] = DummyServer();
  const [sortedCategory, setSortedCategory] = useState<string | null>(null);
  const [sortedWords, setSortedWords] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState("ASC");
  const [clearData, setClearData] = useState<boolean>(false);
  const allData: Data[] = result as Data[];

  if (sortedCategory !== null) {
    allData.sort((a, b) => {
      if (a[sortedCategory].name < b[sortedCategory].name) {
        return sortConfig === "ASC" ? -1 : 1;
      }
      if (a[sortedCategory].name > b[sortedCategory].name) {
        return sortConfig === "ASC" ? 1 : -1;
      }
      return 0;
    });
  }

  const toogleSort = () => {
    setSortConfig(sortConfig === "ASC" ? "DESC" : "ASC");
  };

  const clearStorage = () => {
    localStorage.clear();
    setClearData((x) => !x);
  };

  const tableHeaders = arrTableHeaders.map(({ tableHeaderName }) => {
    const clickHandler =
      tableHeaderName === "category" ? setSortedCategory : setSortedWords;
    return (
      <th>
        <button
          className="app-main__button"
          type="button"
          onClick={() => {
            clickHandler(tableHeaderName);
            toogleSort();
          }}
        >
          {tableHeaderName}
        </button>
      </th>
    );
  });

  const statistics = allData.map((cata, i) => {
    return (
      <CategoryForStatistics
        key={i}
        category={cata.category.name}
        words={cata.cards}
        sortedWords={sortedWords}
        sortConfig={sortConfig}
      />
    );
  });

  return (
    <div className="app-main__stats">
      <Button clearStorage={clearStorage} />
      <div className="app-main__table-container">
        <table className="app-main__table">
          <thead>
            <tr>{tableHeaders}</tr>
          </thead>
          {statistics}
        </table>
      </div>
    </div>
  );
};
