import React, { useState, useContext } from "react";
import { Card } from "../../api/interfaces";
import { gameModeContext } from "../game-mode/game-mode-context";
import "./cards.scss";

const Cards = ({
  word,
  translation,
  image,
  audioSrc,
  activeSound,
  NextAudio,
  gameArrIndex,
}: Card) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const context = useContext(gameModeContext);

  let cardClasses = "card";
  let cardContainerClasses = "card-container";

  if (context.gameMode === "PLAY") {
    cardContainerClasses += " collapse";
  }

  if (isCorrect) {
    cardContainerClasses += " disable";
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

  const onCardClick = (elem: string) => {
    if (activeSound?.word === elem) {
      setIsCorrect(true);
      const audio = new Audio("../audio/correct.mp3");
      audio.play();
      audio.addEventListener("ended", () => {
        NextAudio(gameArrIndex);
      });
    } else {
      const audio = new Audio("../audio/error.mp3");
      audio.play();
    }
  };

  const onClickHandler = context.gameMode === "PLAY" ? onCardClick : playAudio;
  const paramOnClickHandler = context.gameMode === "PLAY" ? word : audioSrc;
  return (
    <div
      className={cardContainerClasses}
      onClick={() => {
        onClickHandler(paramOnClickHandler);
      }}
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
