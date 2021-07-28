import { ASC, Order } from "../../api/types";

interface StateSorter {
  sortedCategory: string | null;
  sortedWords: string | null;
  sortConfig: string;
}

interface ActionTypes {
  type: string;
  payload: Record<string, string>;
}

export const STATISTICS_ACTIONS = {
  SORT_BY_CATEGORY: "sortedByCategory",
  SORT_BY_OTHER: "sortedByOther",
  SORT_CONFIG: "sortedConfig",
};

export const initialStatisticsState: StateSorter = {
  sortedCategory: null,
  sortedWords: null,
  sortConfig: ASC as Order,
};

export const StatisticsPageReducer = (
  state: StateSorter,
  action: ActionTypes
): StateSorter => {
  switch (action.type) {
    case STATISTICS_ACTIONS.SORT_BY_CATEGORY:
      return { ...state, ...{ sortedCategory: action.payload.category } };
    case STATISTICS_ACTIONS.SORT_BY_OTHER:
      return { ...state, ...{ sortedWords: action.payload.other } };
    case STATISTICS_ACTIONS.SORT_CONFIG:
      return { ...state, ...{ sortConfig: action.payload.sortConfig } };
    default:
      return state;
  }
};
