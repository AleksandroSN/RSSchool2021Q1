import { Engine, BodyCar, ParamCar, Drive } from '../interfaces/interfaces';
import { BASE, createData, deleteData, GetAllData, GetData, updateData } from './base-api';

const urlGarage = `${BASE}/garage`;

export const GetCars = (page: number, limit: number) => GetAllData(urlGarage, page, limit);

export const getCar = (id: number): Promise<ParamCar> =>
  GetData(urlGarage, id) as Promise<ParamCar>;

export const createCar = (car: BodyCar): Promise<ParamCar> =>
  createData(urlGarage, car) as Promise<ParamCar>;

export const deleteCar = (id: number): Promise<void> => deleteData(urlGarage, id);

export const updateCar = async (id: number, car: BodyCar): Promise<ParamCar> =>
  updateData(urlGarage, id, car) as Promise<ParamCar>;

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

export const drive = async (id: number): Promise<Drive> => {
  const response = await fetch(`${BASE}/engine?id=${id}&status=drive`).catch();
  if (response.status !== 200) {
    return { success: false };
  }
  const result: Drive = await response.json();
  return result;
};
