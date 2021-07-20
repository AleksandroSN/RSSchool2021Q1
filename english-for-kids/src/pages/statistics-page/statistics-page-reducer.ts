export const initialState = {
  sortedCategory: null,
  sortedWords: null,
  sortConfig: "ASC",
};

export const StatisticsPageReducer = (state: any, action: any) => {
  switch (action.type) {
    case "setsortedCategory":
      return [...state, { sortedCategory: action.payload.name }];
  }
};
