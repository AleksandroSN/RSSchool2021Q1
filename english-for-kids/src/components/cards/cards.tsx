import React, { useState,useContext } from "react";
import { Card } from "../../api/interfaces";
import { gameModeContext } from "../game-mode/game-mode-context";
import "./cards.scss";

const Cards = ({ word, translation, image, audioSrc }: Card) => {
  const [isClick, setIsClick] = useState(false);
  
  const context = useContext(gameModeContext);
  
  // setGamesMode((x) => {
  //   let y = x;
  //   y = sessionStorage.getItem("gameMode") as string;
  //   return y;
  // })
  console.log(context);
  
  let cardClasses = "card";
  let cardContainerClasses = "card-container";
  // const gameMode = "PLAY";

  if (context.gameMode === "PLAY") {
    cardContainerClasses += " collapse"
  }

  if (isClick) {
    cardClasses += " hover";
  }

  const addClass = (): void => {
    setIsClick(true);
  };

  const removeClass = (): void => {
    setIsClick(false);
  };

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div
      className={cardContainerClasses}
      onClick={() => playAudio(audioSrc)}
      onMouseLeave={() => removeClass()}
      role="none"
    >
      <div className={cardClasses}>
        <div className="card__front">
          <img className="card__front-img" src={image} alt={`${word}`} />
          <div className="card__front-container">
            <p>{word}</p>
            <button
              className="card__front-rotateBtn"
              type="button"
              onClick={() => addClass()}
            >
              <img
                className="rotate__svg"
                src="../img/rotate.svg"
                alt="rotate"
              />
            </button>
          </div>
        </div>
        <div className="card__back">
          <img className="card__back-img" src={image} alt={`${word}`} />
          <div className="card__back-container">
            <p>{translation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
