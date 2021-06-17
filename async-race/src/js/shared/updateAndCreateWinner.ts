import { createWinner, GetWinners, updateWinner } from "../api/winner-api";
import { CarTrack } from "../components/car/carTrack";
import { fullInfWinners, IWinner } from "../interfaces/interfaces";

export const updateAndCreateWinner = async (
  id: number,
  winner: CarTrack
): Promise<fullInfWinners> => {
  let allWinnersIds: number[] = [];
  let allWinners: IWinner[] = [];
  await GetWinners(1, 10, "wins", "ASC").then((winners) => {
    allWinnersIds = winners.winnersArray.map((x) => x.id);
    allWinners = winners.winnersArray;
  });

  const newWinnerId = allWinnersIds.find((winnerId) => winnerId === id);

  if (newWinnerId === id) {
    const newWinner = allWinners.find((x) => x.id === id) as IWinner;
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
