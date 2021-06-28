import React, { useState, useEffect } from "react";
import { Data } from "./interfaces";

const DummyServer = () => {
  const [result, setResult] = useState<Data[]>([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    async function GetData() {
      try {
        const response = await fetch("../cards.json");
        const res: Data[] = await response.json();
        await setResult(res);
        setLoading("false");
      } catch (e) {
        setLoading("null");
        throw new Error(`${e}`);
      }
    }

    if (result.length === 0) {
      GetData();
    }
  });

  return [result, loading];
};

export default DummyServer;
