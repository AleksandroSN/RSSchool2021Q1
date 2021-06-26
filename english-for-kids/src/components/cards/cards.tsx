import React from "react";
import { Category } from "./cards-props-interfaces";
import "./cards.scss";

const Cards = ({ img, name }: Category) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card__front">
          <img src={img} alt={`Category ${name}`} />
          <p>{name}</p>
        </div>
        <div className="card__back">
          <img src={img} alt={`Category ${name}`} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
