import { baseFetchResult, BodyCar, BodyWinner, ParamCar, Winner } from "../interfaces-and-types/interfaces";

export const BASE = "http://127.0.0.1:3000";

export const GetAllData = async (
  base: string,
  page: number,
  limit: number,
  sort = "",
  order = ""
): Promise<baseFetchResult> => {
  try {
    let response: Response;
    if (sort && order) {
      response = await fetch(`${base}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    } else {
      response = await fetch(`${base}?_page=${page}&_limit=${limit}`);
    }

    const result: ParamCar[] | Winner[] = await response.json();
    const count = response.headers.get("X-Total-Count") as string;
    return {
      resultArray: result,
      count,
    };
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const GetData = async (base: string, id: number) => {
  try {
    const response = await fetch(`${base}/${id}`);
    const result: ParamCar | Winner = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const deleteData = async (base: string, id: number) => {
  try {
    const response = await fetch(`${base}/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const createData = async (base: string, body: BodyCar | BodyWinner) => {
  try {
    const response = await fetch(`${base}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result: ParamCar | Winner = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const updateData = async (base: string, id: number, body: BodyCar | BodyWinner) => {
  try {
    const response = await fetch(`${base}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result: ParamCar | Winner = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};
