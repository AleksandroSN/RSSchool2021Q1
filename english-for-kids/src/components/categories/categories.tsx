import React from "react";
import { Category } from "../cards/cards-props-interfaces";
import "./categories.scss";

const Categories = ({ img, name }: Category) => {
  return (
    <div className="category-container">
      <div className="category-container__img">
        <img src={img} alt={`Category ${name}`} />
      </div>
      <div className="category-container__text">{name}</div>
    </div>
  );
};

export default Categories;
