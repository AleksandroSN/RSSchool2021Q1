import { IWinner, IBodyWinner, ResultsWinners } from "../interfaces/interfaces";

const BASE = "http://127.0.0.1:3000";

const urlWinners = `${BASE}/winners`;

export const GetWinners = async (
  page: number,
  limit: number,
  sort: string,
  order: string
): Promise<ResultsWinners> => {
  const response = await fetch(
    `${urlWinners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
  );
  const result: IWinner[] = await response.json();
  const count = response.headers.get("X-Total-Count") as string;
  return {
    winnersArray: result,
    countWinners: count,
  };
};

export const getWinner = async (id: number): Promise<IWinner> => {
  try {
    const response = await fetch(`${urlWinners}/${id}`);
    const result: IWinner = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const createWinner = async (winner: IWinner): Promise<IWinner> => {
  const response = await fetch(`${urlWinners}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(winner),
  });
  const result: IWinner = await response.json();
  return result;
};

export const deleteWinner = async (id: number): Promise<void> => {
  const response = await fetch(`${urlWinners}/${id}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};

export const updateWinner = async (
  id: number,
  winner: IBodyWinner
): Promise<IWinner> => {
  const response = await fetch(`${urlWinners}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(winner),
  });
  const result: IWinner = await response.json();
  return result;
};
