import { getCar } from "../api/car-api";
import { GetWinners } from "../api/winner-api";
import { ICar, IWinner, tableWinners } from "../interfaces/interfaces";
import { LIMIT_WINNERS } from "../utils/utils";

export const getAllWinners = async (
  winnersPage: number,
  sortBy: string,
  order: string
) => {
  let numberPage = winnersPage;
  numberPage = Number(localStorage.getItem("winnersPage"));
  let allWinnersIds: number[] = [];
  let allWinners: IWinner[] = [];
  let count = "";
  await GetWinners(numberPage, LIMIT_WINNERS, sortBy, order).then((winners) => {
    allWinnersIds = winners.winnersArray.map((x) => x.id);
    allWinners = winners.winnersArray;
    count = winners.countWinners as string;
  });

  const promiseCars: Promise<ICar>[] = allWinnersIds.map((x) => getCar(x));
  const winnerCars = await Promise.all(promiseCars);

  return { winnerCars, allWinners, count };
};

export const createResultArr = async (
  winnersPage: number,
  sortBy: string,
  order: string
) => {
  const resArr: tableWinners[] = [];

  let count = "";
  await getAllWinners(winnersPage, sortBy, order).then((elem) => {
    count = elem.count;
    elem.allWinners.forEach((x, i) => {
      resArr.push(Object.assign(x, elem.winnerCars[i]));
    });
  });
  return { resArr, count };
};
