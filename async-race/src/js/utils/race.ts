import { CarTrack, carsOnPage } from '../components/car/carTrack';
import { RaceResult } from '../interfaces/interfaces';

export const driveAll = async (
  promises: Promise<RaceResult>[],
  ids: number[]
): Promise<CarTrack> => {
  const { success, time, id } = await Promise.race(promises);

  if (!success) {
    const failId = ids.findIndex((i) => i === id);
    promises.splice(failId, 1);
    ids.splice(failId, 1);
    return driveAll(promises, ids);
  }

  const findWinner = carsOnPage.find((car) => car.id === id) as CarTrack;
  findWinner.time = Number((time / 1000).toFixed(2));

  return findWinner;
};

export const race = async () => {
  const promises: Promise<RaceResult>[] = carsOnPage.map((x) => x.carInstance.startDriving(x.id));

  const arrIds: number[] = carsOnPage.map((x) => x.id);

  const winner = await driveAll(promises, arrIds);

  return winner;
};
