import { useState, useContext } from "react";
import { Card, WordsStatistics } from "../../api/interfaces";
import { updateWordStats } from "../../utils/updateWordStats";
import { gameModeContext } from "../context/game-mode-ctx/game-mode-context";
import "./cards.scss";

const Cards = ({
  word,
  translation,
  image,
  audioSrc,
  activeSound,
  gameArrIndex,
  category,
  isGame,
  Progress,
  NextAudio,
}: Card): JSX.Element => {
  const currentState: WordsStatistics = JSON.parse(
    localStorage.getItem(`${word}`) as string
  );

  const [isClick, setIsClick] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [clicksTrainMode, setClicksTrainMode] = useState<number>(() => {
    if (currentState) {
      return Number(currentState.clicksTrainMode);
    }
    return 0;
  });
  const [succesGameMode, setSuccesGameMode] = useState<number>(() => {
    if (currentState) {
      return Number(currentState.succesGameMode);
    }
    return 0;
  });
  const [wrongGameMode, setWrongGameMode] = useState<number>(() => {
    if (currentState) {
      return Number(currentState.wrongGameMode);
    }
    return 0;
  });

  const { gameMode } = useContext(gameModeContext);

  let cardClasses = "card";
  let cardContainerClasses = "card-container";

  if (gameMode === "PLAY") {
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
    setClicksTrainMode((x) => x + 1);
  };

  const onCardClick = (elem: string) => {
    if (!isGame) {
      return;
    }
    if (activeSound?.word === elem) {
      setSuccesGameMode((x) => x + 1);
      setIsCorrect(true);
      Progress(true);
      const audio = new Audio("../audio/correct.wav");
      audio.volume = 0.3;
      audio.play();
      audio.addEventListener("ended", () => {
        NextAudio(gameArrIndex);
      });
    } else {
      Progress(false);
      setWrongGameMode((x) => x + 1);
      const audio = new Audio("../audio/error.mp3");
      audio.play();
    }
  };

  updateWordStats({
    category,
    word,
    translation,
    clicksTrainMode,
    succesGameMode,
    wrongGameMode,
  });

  const onClickHandler = gameMode === "PLAY" ? onCardClick : playAudio;
  const paramOnClickHandler = gameMode === "PLAY" ? word : audioSrc;
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
