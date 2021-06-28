import React, { useState } from "react";
import { Card } from "../../api/interfaces";
import "./cards.scss";

const Cards = ({ word, translation, image, audioSrc }: Card) => {
  const [isClick, setIsClick] = useState(false);

  let cardClasses = 'card'  

  if (isClick) {
    cardClasses += ' hover'
  }

  const toggleClass = (): void => {
    setIsClick((hover) => !hover);  
  };

  const playAudio = (url: string) => {
    const audio = new Audio(url);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div
      className="card-container"
      onClick={() => playAudio(audioSrc)}
      onMouseLeave={() => toggleClass()}
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
              onClick={() => toggleClass()}>
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
