import { useState } from "react";
import { WordsStatistics } from "../../api/interfaces";

interface CheckClick {
  isClick: boolean;
  addClass: () => void;
  removeClass: () => void;
}

export const CardsControll = (): CheckClick => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const addClass = (): void => {
    setIsClick(true);
  };

  const removeClass = (): void => {
    setIsClick(false);
  };

  return { isClick, addClass, removeClass };
};

interface StateCountClicks {
  clicksTrainMode: number;
  setClicksTrainMode: React.Dispatch<React.SetStateAction<number>>;
  succesGameMode: number;
  setSuccesGameMode: React.Dispatch<React.SetStateAction<number>>;
  wrongGameMode: number;
  setWrongGameMode: React.Dispatch<React.SetStateAction<number>>;
}

export const CountClicks = (word: string): StateCountClicks => {
  const currentState: WordsStatistics = JSON.parse(
    localStorage.getItem(`${word}`) as string
  );
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

  return {
    clicksTrainMode,
    setClicksTrainMode,
    succesGameMode,
    setSuccesGameMode,
    wrongGameMode,
    setWrongGameMode,
  };
};
