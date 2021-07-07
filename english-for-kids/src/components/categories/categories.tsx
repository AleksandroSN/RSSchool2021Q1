import React from "react";
import { NavLink } from "react-router-dom";
import { Category } from "../../api/interfaces";

import "./categories.scss";

const Categories = ({ image, name, id }: Category): JSX.Element => {
  return (
    <NavLink className="category-container" to={`/game/${id}`}>
      <div className="category-container__img">
        <img src={image} alt={`Category ${name}`} />
      </div>
      <div className="category-container__text">{name}</div>
    </NavLink>
  );
};

export default Categories;
