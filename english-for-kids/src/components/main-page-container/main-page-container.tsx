import React from "react";
import DummyServer from "../../api/dummyMocks";
import { Data } from "../../api/interfaces";
// import Cards from "../cards/cards";
import Categories from "../categories/categories";
import "./main-page-container.scss";

const MainPageContainer = (): JSX.Element => {
  const [result] = DummyServer();

  const arrData: Data[] = result as Data[];
  const cards = arrData.map((elem) => {
    return (
      <Categories
        image={elem.category.image}
        name={elem.category.name}
        id={elem.category.id}
      />
    );
  });

  return <div className="app-main-page__container">{cards}</div>;
};

export default MainPageContainer;
