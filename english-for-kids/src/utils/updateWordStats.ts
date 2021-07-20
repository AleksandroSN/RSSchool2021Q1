import { WordsStatistics } from "../api/interfaces";

export const updateWordStats = ({
  category,
  word,
  translation,
  clicksTrainMode = 0,
  succesGameMode = 0,
  wrongGameMode = 0,
}: WordsStatistics): void => {
  let percentCorrects = 0;

  if (wrongGameMode === 0 && succesGameMode === 0) {
    percentCorrects = 0;
  } else if (wrongGameMode === 0 && succesGameMode > 0) {
    percentCorrects = 100;
  } else {
    percentCorrects = +(
      (succesGameMode / (succesGameMode + wrongGameMode)) *
      100
    ).toFixed();
  }

  localStorage.setItem(
    `${word}`,
    JSON.stringify({
      category: `${category}`,
      word: `${word}`,
      translation: `${translation}`,
      clicksTrainMode: `${clicksTrainMode}`,
      succesGameMode: `${succesGameMode}`,
      wrongGameMode: `${wrongGameMode}`,
      percentCorrects: `${percentCorrects}`,
    })
  );
};
