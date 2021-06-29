import { getCar } from "../api/car-api";
import { GetWinners } from "../api/winner-api";
import { ParamCar, Winner, tableWinners } from "../interfaces-and-types/interfaces";
import { LIMIT_WINNERS } from "../utils/utils";

export const getAllWinners = async (winnersPage: number, sortBy: string, order: string) => {
  let numberPage = winnersPage;
  numberPage = Number(localStorage.getItem("winnersPage"));
  let allWinnersIds: number[] = [];
  let allWinners: Winner[] = [];
  let count = "";
  await GetWinners(numberPage, LIMIT_WINNERS, sortBy, order).then((winners) => {
    const resArr = winners.resultArray as Winner[];
    allWinnersIds = resArr.map((x) => x.id);
    allWinners = winners.resultArray as Winner[];
    count = winners.count as string;
  });

  const promiseCars: Promise<ParamCar>[] = allWinnersIds.map((x) => getCar(x));
  const winnerCars = await Promise.all(promiseCars);

  return { winnerCars, allWinners, count };
};

export const createResultArr = async (winnersPage: number, sortBy: string, order: string) => {
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
