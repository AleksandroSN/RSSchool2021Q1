import { createWinner, GetWinners, updateWinner } from "../api/winner-api";
import { CarTrack } from "../components/car/carTrack";
import { fullInfWinners, Winner } from "../interfaces-and-types/interfaces";
import { ASC, Order } from "../interfaces-and-types/types";

export const updateAndCreateWinner = async (
  id: number,
  winner: CarTrack
): Promise<fullInfWinners> => {
  let allWinnersIds: number[] = [];
  let allWinners: Winner[] = [];
  await GetWinners(1, 10, "wins", ASC as Order).then((winners) => {
    const resArr = winners.resultArray as Winner[];
    allWinnersIds = resArr.map((x) => x.id);
    allWinners = winners.resultArray as Winner[];
  });

  const newWinnerId = allWinnersIds.find((winnerId) => winnerId === id);

  if (newWinnerId === id) {
    const newWinner = allWinners.find((x) => x.id === id) as Winner;
    winner.wins = newWinner.wins + 1;
    updateWinner(id, { wins: winner.wins, time: winner.time });
  } else {
    winner.wins += 1;
    createWinner({ id: winner.id, wins: winner.wins, time: winner.time });
  }

  return {
    color: winner.color,
    carName: winner.carName,
    wins: winner.wins,
    time: winner.time,
  };
};
