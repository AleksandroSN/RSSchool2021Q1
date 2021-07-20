export const sliceAudioName = (soundFileSrc: string): string => {
  const soundFile = soundFileSrc.substr(soundFileSrc.lastIndexOf("/") + 1);
  return soundFile;
};
