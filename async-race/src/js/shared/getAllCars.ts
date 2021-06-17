import { GetCars } from "../api/car-api";
import { carsOnPage, CarTrack } from "../components/car/carTrack";
import { LIMIT_CARS } from "../utils/utils";

export const getAllCars = async (
  garagePage: number,
  countCars: HTMLElement,
  track: HTMLElement
) => {
  let somethingCount = "";
  let numberPage = garagePage;
  numberPage = Number(localStorage.getItem("garagePage"));
  carsOnPage.length = 0;
  await GetCars(numberPage, LIMIT_CARS).then((cars) => {
    countCars.textContent = cars.countCars;
    localStorage.setItem("carsOnPage", JSON.stringify(cars.carArray));
    cars.carArray.forEach((car) => {
      const newCar = new CarTrack(
        car.name,
        car.color,
        car.id,
        track,
        countCars
      );
      carsOnPage.push(newCar);
      track.append(newCar.element);
    });
    somethingCount = cars.countCars as string;
  });
  return somethingCount;
};
