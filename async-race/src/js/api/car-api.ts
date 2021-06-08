const BASE = 'http://127.0.0.1:3000'

const urlGarage = `${BASE}\garage`;

export const GetCars = async () : Promise<void> => {
  const response = await fetch(`${urlGarage}?_page=1&_limit=2`);
  const result = await response.json();
  return result;
}

export const getCar = async (id : number) : Promise<void> => {
  const response = await fetch(`/garage/${id}`);
  const result = await response.json();
  return result;
}

export const createCar = async (car : any) : Promise<void> => {
  // car as ICar => ICar {name: string, color: string}
  const response = await fetch(`/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  });
  const result = await response.json();
  return result;
}

export const deleteCar = async(id: number) : Promise<void> => {
  const response = await fetch(`/garage${id}`, {
    method: 'DELETE'
  })
  const result = await response.json();
  return result;
}

export const updateCar = async(id: number, car : any) : Promise<void> => {
  const response = await fetch(`/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  });
  const result = await response.json();
  return result;
}