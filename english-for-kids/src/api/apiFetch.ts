import { useEffect, useState } from "react";
import { AllData, FetchData } from "./interfaces";

export const BASE =
  process.env.REACT_APP_BASE_SERVER ||
  `http://localhost:${process.env.REACT_APP_LOCAL_SERVER_PORT}`;

export const GetAlldata = (): AllData => {
  const [result, setResult] = useState<FetchData[]>([]);
  const [loading, setLoading] = useState<string>("true");

  useEffect(() => {
    (async function loadData() {
      try {
        const response = await fetch(`${BASE}/category`);
        const res: FetchData[] = await response.json();
        setResult(res);
        setLoading("false");
      } catch (e) {
        setLoading("null");
        throw new Error(`${e}`);
      }
    })();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(`${BASE}/category`);
      const res: FetchData[] = await response.json();
      setResult(res);
      setLoading("false");
    } catch (e) {
      setLoading("null");
      throw new Error(`${e}`);
    }
  };

  return { result, loading, getData };
};

export const createData = async (body: FetchData): Promise<void> => {
  try {
    const response = await fetch(`${BASE}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const updateData = async (
  body: FetchData,
  id: string
): Promise<void> => {
  try {
    const response = await fetch(`${BASE}/category/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const deleteDataCategry = async (id: string): Promise<FetchData[]> => {
  try {
    const response = await fetch(`${BASE}/category/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const uploadData = async (data: FormData): Promise<void> => {
  try {
    const response = await fetch(`${BASE}/upload`, {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    return result;
  } catch (e) {
    throw new Error(`${e}`);
  }
};
