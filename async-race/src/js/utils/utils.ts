import { createCar, GetCars } from "../api/car-api";
import { Button } from "../components/buttons/buttons";
import { ICar } from "../interfaces/interfaces";
import { carBrands } from "./carBrands";
import { carModels } from "./carModels";

const TO_16_BIT = 16;

export const generateRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * TO_16_BIT)];
  }
  return color;
};

export const generateRandomName = (): string => {
  const brand = carBrands[Math.floor(Math.random() * carBrands.length)];
  const model = carModels[Math.floor(Math.random() * carModels.length)];
  return `${brand} ${model}`;
};

export const generateRandomCar = (count = 100) => {
  const randomArray = [...Array(count).keys()] as unknown[];
  const newArr = randomArray.map((_) => ({
    name: generateRandomName(),
    color: generateRandomColor(),
  }));
  return newArr;
};

export const createRandomCars = async () => {
  const randomCars = generateRandomCar();
  const promiseArr: Promise<ICar>[] = [];
  for (let i = 0; i < randomCars.length; i += 1) {
    promiseArr.push(createCar(randomCars[i]));
  }
  const promise = await Promise.all(promiseArr);
  return promise;
};

const BASE_PAGE = 1;
export const LIMIT_CARS = 7;
export const LIMIT_WINNERS = 10;

export const countAllCars = async () => {
  const { carArray, countCars } = await GetCars(BASE_PAGE, LIMIT_CARS);
  return {
    items: carArray,
    count: countCars,
  };
};

const bodyMargin = 8;

export const carRoute = (car: HTMLDivElement): number => {
  return (
    window.innerWidth -
    car.offsetLeft -
    car.offsetWidth / 2 -
    bodyMargin -
    window.innerWidth * 0.1 -
    60
  );
};

export const handlerPaginationBtn = (
  numberPage: number,
  totalAmount: string,
  nextButton: Button,
  prevButton: Button,
  limit: number
): void => {
  if (numberPage * limit < Number(totalAmount)) {
    nextButton.element.disabled = false;
  } else {
    nextButton.element.disabled = true;
  }
  if (numberPage > 1) {
    prevButton.element.disabled = false;
  } else {
    prevButton.element.disabled = true;
  }
};
