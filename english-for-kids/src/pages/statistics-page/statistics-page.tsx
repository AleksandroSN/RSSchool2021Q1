import React, { useState } from "react";
import DummyServer from "../../api/dummyMocks";
import { Data } from "../../api/interfaces";
import { CategoryForStatistics } from "../../components/data-for-statistics/category-for-statistics";
import "./statistics-page.scss";

const StatisticsPage = (): JSX.Element => {
  const [result] = DummyServer();
  const [sortedCategory, setSortedCategory] = useState<string | null>(null);
  const [sortedWords, setSortedWords] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState("ASC");
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

  const toogle = () => {
    setSortConfig(sortConfig === "ASC" ? "DESC" : "ASC");
  };

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
    <table className="app-main__table">
      <thead>
        <tr>
          <th>
            <button
              className="app-main__button"
              type="button"
              onClick={() => {
                setSortedCategory("category");
                toogle();
              }}
            >
              Category
            </button>
          </th>
          <th>
            <button
              className="app-main__button"
              type="button"
              onClick={() => {
                setSortedWords("word");
                toogle();
              }}
            >
              Word
            </button>
          </th>
          <th>
            <button
              className="app-main__button"
              type="button"
              onClick={() => {
                setSortedWords("translation");
                toogle();
              }}
            >
              Translate
            </button>
          </th>
          <th>
            <button
              className="app-main__button"
              type="button"
              onClick={() => {
                setSortedWords("clicksTrainMode");
                toogle();
              }}
            >
              Train Mode
            </button>
          </th>
          <th>
            <button
              className="app-main__button"
              type="button"
              onClick={() => {
                setSortedWords("succesGameMode");
                toogle();
              }}
            >
              Game mode
            </button>
          </th>
          <th>
            <button
              className="app-main__button"
              type="button"
              onClick={() => {
                setSortedWords("wrongGameMode");
                toogle();
              }}
            >
              Errors
            </button>
          </th>
          <th>
            <button
              className="app-main__button"
              type="button"
              onClick={() => {
                setSortedWords("percentCorrects");
                toogle();
              }}
            >
              % Corrects
            </button>
          </th>
        </tr>
      </thead>
      {statistics}
    </table>
  );
};

export default StatisticsPage;
