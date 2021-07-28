import { useState, useReducer } from "react";
import { GetAlldata } from "../../api/apiFetch";
import { Card, FetchData } from "../../api/interfaces";
import { ASC, DESC, Order } from "../../api/types";
import { Button } from "../../components/buttons/buttons";
import { CategoryForStatistics } from "../../components/data-for-statistics/category-for-statistics";
import { arrTableHeaders } from "../../utils/arrTableHeaders";
import { sortStatistic } from "../../utils/sorter";
import {
  STATISTICS_ACTIONS,
  initialStatisticsState,
  StatisticsPageReducer,
} from "./statistics-page-reducer";
import "./statistics-page.scss";

export const StatisticsPage = (): JSX.Element => {
  const { result } = GetAlldata();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clearData, setClearData] = useState<boolean>(false);
  const allData: FetchData[] = result as FetchData[];

  const [state, dispatch] = useReducer(
    StatisticsPageReducer,
    initialStatisticsState
  );

  const sortByCategory = (nameOnClick: string) => {
    dispatch({
      type: STATISTICS_ACTIONS.SORT_BY_CATEGORY,
      payload: { category: nameOnClick },
    });
  };

  const sortByOther = (nameOnClick: string) => {
    dispatch({
      type: STATISTICS_ACTIONS.SORT_BY_OTHER,
      payload: { other: nameOnClick },
    });
  };

  sortStatistic(state.sortedCategory, state.sortConfig, allData);

  const toogleSort = () => {
    if (state.sortConfig === (ASC as Order)) {
      dispatch({
        type: STATISTICS_ACTIONS.SORT_CONFIG,
        payload: { sortConfig: DESC as Order },
      });
    } else {
      dispatch({
        type: STATISTICS_ACTIONS.SORT_CONFIG,
        payload: { sortConfig: ASC as Order },
      });
    }
  };

  const clearStorage = () => {
    localStorage.clear();
    setClearData((x) => !x);
  };

  const tableHeaders = arrTableHeaders.map(
    ({ tableHeaderName, nameOnClick }) => {
      const clickHandler =
        nameOnClick === "categoryName" ? sortByCategory : sortByOther;
      return (
        <th key={tableHeaderName}>
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

  const statistics = allData.map((cata) => {
    return (
      <CategoryForStatistics
        key={cata.categoryName}
        category={cata.categoryName}
        words={cata.cards as Card[]}
        sortedWords={state.sortedWords}
        sortConfig={state.sortConfig}
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
