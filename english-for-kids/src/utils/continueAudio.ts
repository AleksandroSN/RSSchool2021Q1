interface PropsContinueAudio {
  NextAudio: (idx: number) => void;
  gameArrIndex: number;
}

export const continueAudio = ({
  NextAudio,
  gameArrIndex,
}: PropsContinueAudio): void => {
  const audio = new Audio("../audio/correct.wav");
  audio.volume = 0.3;
  audio.play();
  audio.addEventListener("ended", () => {
    NextAudio(gameArrIndex);
  });
};
