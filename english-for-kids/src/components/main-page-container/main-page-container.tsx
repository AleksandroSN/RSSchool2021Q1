import React from "react";
import DummyServer from "../../api/dummyMocks";
import { Data } from "../../api/interfaces";
// import Cards from "../cards/cards";
import Categories from "../categories/categories";
import "./main-page-container.scss";

const MainPageContainer = (): JSX.Element => {
  const [result] = DummyServer();

  const arrData: Data[] = result as Data[];
  const cards = arrData.map(({ category }, i) => {
    return (
      <Categories
        key={i}
        image={category.image}
        name={category.name}
        id={category.id}
      />
    );
  });

  return <div className="app-main-page__container">{cards}</div>;
};

export default MainPageContainer;
