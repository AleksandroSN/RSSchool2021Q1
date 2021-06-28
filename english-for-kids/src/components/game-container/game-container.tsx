import React, { useState, useEffect } from "react";
import DummyServer from "../../api/dummyMocks";
import { Data } from "../../api/interfaces";
import { PropsGamePage } from "../../pages/game-page/game-page-props";
import Cards from "../cards/cards";
import "./game-container.scss";

const GameContainer = ({ id }: PropsGamePage): JSX.Element => {
  const [result, loading] = DummyServer();
  console.log(result);

  const index = Number(id) - 1;
  const curArrCards: Data = result[index] as Data;
  return (
    <div className="game-container">
      {loading === "true" ? (
        <h1>Waiting...</h1>
      ) : (
        curArrCards.cards.map((card) => {
          return (
            <Cards
              word={card.word}
              translation={card.translation}
              image={card.image}
              audioSrc={card.audioSrc}
            />
          );
        })
      )}
    </div>
  );
};

export default GameContainer;
