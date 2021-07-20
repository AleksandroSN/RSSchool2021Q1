import { Category } from "../models/category";

export const PaginationAndLimit = (
  page: string = "1",
  limit: string,
  arr: Category[]
) => {
  const modifyArr = arr.slice(
    Number(limit) * (Number(page) - 1),
    Number(limit) * Number(page)
  );
  return modifyArr;
};
