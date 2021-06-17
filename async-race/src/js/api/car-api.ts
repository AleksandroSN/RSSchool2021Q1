import {
  Engine,
  IBodyCar,
  ICar,
  IDrive,
  Result,
} from "../interfaces/interfaces";

const BASE = "http://127.0.0.1:3000";

const urlGarage = `${BASE}/garage`;

export const GetCars = async (page: number, limit: number): Promise<Result> => {
  const response = await fetch(`${urlGarage}?_page=${page}&_limit=${limit}`);
  const result: ICar[] = await response.json();
  const count = response.headers.get("X-Total-Count") as string;
  return {
    carArray: result,
    countCars: count,
  };
};

export const getCar = async (id: number): Promise<ICar> => {
  try {
    const response = await fetch(`${urlGarage}/${id}`);
    const result: ICar = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const createCar = async (car: IBodyCar): Promise<ICar> => {
  const response = await fetch(`${urlGarage}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  const result: ICar = await response.json();
  return result;
};

export const deleteCar = async (id: number): Promise<void> => {
  const response = await fetch(`${urlGarage}/${id}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};

export const updateCar = async (id: number, car: IBodyCar): Promise<ICar> => {
  const response = await fetch(`${urlGarage}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  const result: ICar = await response.json();
  return result;
};

export const startEngine = async (id: number): Promise<Engine> => {
  const response = await fetch(`${BASE}/engine?id=${id}&status=started`);
  const result: Engine = await response.json();
  return result;
};

export const stopEngine = async (id: number): Promise<Engine> => {
  const response = await fetch(`${BASE}/engine?id=${id}&status=stopped`);
  const result: Engine = await response.json();
  return result;
};

export const drive = async (id: number): Promise<IDrive> => {
  const response = await fetch(`${BASE}/engine?id=${id}&status=drive`).catch();
  if (response.status !== 200) {
    return { success: false };
  }
  const result: IDrive = await response.json();
  return result;
};
