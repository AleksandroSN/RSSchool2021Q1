interface TableHeadData {
  tableHeaderName: string;
  nameOnClick: string;
}

export const arrTableHeaders: TableHeadData[] = [
  {
    tableHeaderName: "category",
    nameOnClick: "categoryName",
  },
  {
    tableHeaderName: "word",
    nameOnClick: "word",
  },
  {
    tableHeaderName: "translate",
    nameOnClick: "translate",
  },
  {
    tableHeaderName: "train mode",
    nameOnClick: "clicksTrainMode",
  },
  {
    tableHeaderName: "game mode",
    nameOnClick: "succesGameMode",
  },
  {
    tableHeaderName: "errors",
    nameOnClick: "wrongGameMode",
  },
  {
    tableHeaderName: "% corrects",
    nameOnClick: "percentCorrects",
  },
];
