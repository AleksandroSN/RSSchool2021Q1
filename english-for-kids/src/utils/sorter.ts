import { FetchData, WordsStatistics } from "../api/interfaces";
import { ASC, Order } from "../api/types";

export const sortStatistic = (
  sortedParams: string | null,
  sortConfig: string,
  data: FetchData[] | WordsStatistics[]
): void => {
  if (sortedParams !== null) {
    data.sort((a, b) => {
      if (a[sortedParams] < b[sortedParams]) {
        return sortConfig === (ASC as Order) ? -1 : 1;
      }
      if (a[sortedParams] > b[sortedParams]) {
        return sortConfig === (ASC as Order) ? 1 : -1;
      }
      return 0;
    });
  }
};
