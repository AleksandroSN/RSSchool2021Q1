import { useState, useContext } from "react";
import { Card } from "../../api/interfaces";
import { GameMode, PLAY } from "../../api/types";
import { playAudio } from "../../utils/playAudio";
import { updateWordStats } from "../../utils/updateWordStats";
import { GameModeContext } from "../context/game-mode-ctx/game-mode-context";
import { clickCorrect, wrongClick } from "./cards-clickHandler";
import { CardsControll, CountClicks } from "./cards-controll";
import { CardMarkup } from "./cards-markup";
import "./cards.scss";

export const Cards = ({
  word,
  translation,
  imageSrc,
  audioSrc,
  activeSound,
  gameArrIndex,
  category,
  isGame,
  Progress,
  NextAudio,
}: Card): JSX.Element => {
  const { isClick, addClass, removeClass } = CardsControll();
  const {
    clicksTrainMode,
    setClicksTrainMode,
    succesGameMode,
    setSuccesGameMode,
    wrongGameMode,
    setWrongGameMode,
  } = CountClicks(word);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const { gameMode } = useContext(GameModeContext);

  let cardClasses = "card";
  let cardContainerClasses = "card-container";

  if (gameMode === (PLAY as GameMode)) {
    cardContainerClasses += " collapse";
  }

  if (isCorrect) {
    cardContainerClasses += " disable";
  }

  if (isClick) {
    cardClasses += " hover";
  }

  const onCardClickTrain = (url: string) => {
    playAudio(url);
    setClicksTrainMode((x) => x + 1);
  };

  const onCardClickGame = (elem: string) => {
    if (!isGame) {
      return;
    }
    if (activeSound?.word === elem) {
      clickCorrect({
        Progress,
        setSuccesGameMode,
        setIsCorrect,
        NextAudio,
        gameArrIndex,
      });
    } else {
      wrongClick({ Progress, setWrongGameMode });
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

  const onClickHandler =
    gameMode === "PLAY" ? onCardClickGame : onCardClickTrain;
  const paramOnClickHandler = gameMode === "PLAY" ? word : audioSrc;
  return (
    <CardMarkup
      cardContainerClasses={cardContainerClasses}
      cardClasses={cardClasses}
      imageSrc={imageSrc}
      word={word}
      translation={translation}
      paramOnClickHandler={paramOnClickHandler}
      onClickHandler={onClickHandler}
      addClass={addClass}
      removeClass={removeClass}
    />
  );
};
