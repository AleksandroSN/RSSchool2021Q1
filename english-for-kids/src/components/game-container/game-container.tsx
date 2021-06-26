import React, { useState, useEffect } from "react";
import DummyServer from "../../api/dummyMocks";
// import Cards from "../cards/cards";
import Categories from "../categories/categories";
import "./game-container.scss";

const GameContainer = (): JSX.Element => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    DummyServer().then((result) => SetData(result));
  }, []);

  const arrData: any[] = data;
  const cards = arrData.map((elem) => {
    return <Categories img={elem.category.image} name={elem.category.name} />;
  });

  console.log(data);

  return <div className="game-container">{cards}</div>;
};

export default GameContainer;
