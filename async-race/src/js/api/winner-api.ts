import { Winner, BodyWinner } from "../interfaces-and-types/interfaces";
import { BASE, createData, deleteData, GetAllData, GetData, updateData } from "./base-api";

const urlWinners = `${BASE}/winners`;

export const GetWinners = (page: number, limit: number, sort: string, order: string) =>
  GetAllData(urlWinners, page, limit, sort, order);

export const getWinner = (id: number): Promise<Winner> =>
  GetData(urlWinners, id) as Promise<Winner>;

export const createWinner = (winner: Winner): Promise<Winner> =>
  createData(urlWinners, winner) as Promise<Winner>;

export const deleteWinner = (id: number): Promise<void> => deleteData(urlWinners, id);

export const updateWinner = async (id: number, winner: BodyWinner): Promise<Winner> =>
  updateData(urlWinners, id, winner) as Promise<Winner>;
