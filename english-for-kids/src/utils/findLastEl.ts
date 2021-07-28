import { FetchData } from "../api/interfaces";

export const findLastEl = (result: FetchData[]): string => {
  let id = "";
  if (result.length > 0) {
    const lastIdx = result.length - 1;
    const lastEl = result[lastIdx];
    id = lastEl.uniqueKey as string;
  }

  return id;
};
