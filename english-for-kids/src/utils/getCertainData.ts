import { GetAlldata } from "../api/apiFetch";
import { FetchData } from "../api/interfaces";

export const getCertainData = (id: number) => {
  const { result } = GetAlldata();
  const certainData: FetchData = result[id] as FetchData;
  return certainData;
};
