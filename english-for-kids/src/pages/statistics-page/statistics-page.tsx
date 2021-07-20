import { useState } from "react";
import { GetAlldata } from "../../api/apiFetch";
import { Card, FetchData } from "../../api/interfaces";
import { ASC, DESC, Order } from "../../api/types";
import { Button } from "../../components/buttons/buttons";
import { CategoryForStatistics } from "../../components/data-for-statistics/category-for-statistics";
import { arrTableHeaders } from "../../utils/arrTableHeaders";
import { sortStatistic } from "../../utils/sorter";
import "./statistics-page.scss";

export const StatisticsPage = (): JSX.Element => {
  // useReducer to help
  const { result } = GetAlldata();
  const [sortedCategory, setSortedCategory] = useState<string | null>(null);
  const [sortedWords, setSortedWords] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState("ASC");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clearData, setClearData] = useState<boolean>(false);
  const allData: FetchData[] = result as FetchData[];

  sortStatistic(sortedCategory, sortConfig, allData);

  const toogleSort = () => {
    setSortConfig(
      sortConfig === (ASC as Order) ? (DESC as Order) : (ASC as Order)
    );
  };

  const clearStorage = () => {
    localStorage.clear();
    setClearData((x) => !x);
  };

  const tableHeaders = arrTableHeaders.map(
    ({ tableHeaderName, nameOnClick }) => {
      const clickHandler =
        nameOnClick === "categoryName" ? setSortedCategory : setSortedWords;
      return (
        <th>
          <button
            className="app-main__button"
            type="button"
            onClick={() => {
              clickHandler(nameOnClick);
              toogleSort();
            }}
          >
            {tableHeaderName}
          </button>
        </th>
      );
    }
  );

  const statistics = allData.map((cata, i) => {
    return (
      <CategoryForStatistics
        key={i}
        category={cata.categoryName}
        words={cata.cards as Card[]}
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
