export const playAudio = (url: string): void => {
  const audio = new Audio(url);
  audio.currentTime = 0;
  audio.play();
};
