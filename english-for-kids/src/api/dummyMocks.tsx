import React from "react";

const DummyServer = async () => {
  try {
    const response = await fetch("./cards.json");
    const res = await response.json();
    return res;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export default DummyServer;
