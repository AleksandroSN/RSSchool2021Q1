import { continueAudio } from "../../utils/continueAudio";
import { playAudio } from "../../utils/playAudio";

interface PropsWrongClick {
  Progress: (status: boolean) => void;
  setWrongGameMode: (value: React.SetStateAction<number>) => void;
}
interface PropsCorrectClick {
  Progress: (status: boolean) => void;
  setSuccesGameMode: (value: React.SetStateAction<number>) => void;
  setIsCorrect: (value: React.SetStateAction<boolean>) => void;
  NextAudio: (idx: number) => void;
  gameArrIndex: number;
}

export const clickCorrect = ({
  Progress,
  setSuccesGameMode,
  setIsCorrect,
  NextAudio,
  gameArrIndex,
}: PropsCorrectClick): void => {
  setSuccesGameMode((x) => x + 1);
  setIsCorrect(true);
  Progress(true);
  continueAudio({ NextAudio, gameArrIndex });
};
export const wrongClick = ({
  Progress,
  setWrongGameMode,
}: PropsWrongClick): void => {
  Progress(false);
  setWrongGameMode((x) => x + 1);
  playAudio("../audio/error.mp3");
};
