export const GameOverAudio = (result: boolean): void => {
  if (result) {
    setTimeout(() => {
      const audio = new Audio("/audio/success.mp3");
      audio.play();
    }, 500);
  } else {
    setTimeout(() => {
      const audio = new Audio("/audio/failure.mp3");
      audio.play();
    }, 500);
  }
};
