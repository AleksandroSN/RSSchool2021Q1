import { useContext, useState, useEffect } from "react";
import { Card, FetchData, gameSound } from "../../api/interfaces";
import { GameMode, PLAY } from "../../api/types";
import { gameOverAudio } from "../../utils/game-over-audio";
import { winStar, loseStar } from "../../utils/progressStars";
import { shuffleArray } from "../../utils/shuffleArray";
import { Cards } from "../cards/cards";
import { GameModeContext } from "../context/game-mode-ctx/game-mode-context";
import { GameOver } from "../game-over/game-over";
import "./game-container.scss";

interface PropsGameContainer {
  id: string;
  result: FetchData[];
  loading: string;
}

export const GameContainer = ({
  id,
  result,
  loading,
}: PropsGameContainer): JSX.Element => {
  const gameModeCTX = useContext(GameModeContext);
  const [isGame, setIsGame] = useState<boolean>(false);
  const [gameArr, setGameArr] = useState<Card[]>();
  const [gameArrIndex, setGameArrIndex] = useState<number>(0);
  const [activeSound, setActiveSound] = useState<gameSound | null>(null);
  const [gameProgress, setGameProgress] = useState<JSX.Element[]>([]);
  const [endGame, setEndGame] = useState<boolean | undefined>();
  const [errors, setErrors] = useState<number>(0);

  const index = Number(id) - 1;
  const currCardsArr: FetchData = result[index] as FetchData;

  useEffect(() => {
    (function createShuffleArr() {
      if (currCardsArr) {
        const shuffleArr = shuffleArray(currCardsArr.cards as Card[]);
        setGameArr(shuffleArr);
        setIsGame(false);
        setActiveSound(null);
      }
    })();
  }, [currCardsArr]);

  let btnClasses = "game-container__button";

  if (gameModeCTX.gameMode === (PLAY as GameMode)) {
    btnClasses += " show";
  }

  if (isGame) {
    btnClasses += " game-container__button-game";
  }

  const playAudio = (idx: number) => {
    setIsGame(true);
    if (activeSound) {
      activeSound.audio.play();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const audio = new Audio(gameArr![idx].audioSrc);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setActiveSound({ audio, word: gameArr![idx].word });
      audio.play();
      setGameArrIndex((x) => x + 1);
    }
  };

  const nextAudio = (idx: number) => {
    if (gameArrIndex === gameArr?.length) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const audio = new Audio(gameArr![idx].audioSrc);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setActiveSound({ audio, word: gameArr![idx].word });
    audio.play();
    setGameArrIndex((x) => x + 1);
  };

  const progress = (status: boolean) => {
    if (gameArrIndex === gameArr?.length) {
      setIsGame(false);
      if (errors > 0) {
        gameOverAudio(false);
        setEndGame(false);
      } else {
        gameOverAudio(true);
        setEndGame(true);
      }
    }
    if (status) {
      setGameProgress((arr) => [winStar(), ...arr]);
    } else {
      setErrors((x) => x + 1);
      setGameProgress((arr) => [loseStar(), ...arr]);
    }
  };

  let cardsArr: JSX.Element[] = [];
  if (currCardsArr) {
    cardsArr = currCardsArr.cards!.map((card, i) => {
      return (
        <Cards
          key={i}
          word={card.word}
          translation={card.translation}
          imageSrc={card.imageSrc}
          audioSrc={card.audioSrc}
          activeSound={activeSound as gameSound}
          NextAudio={nextAudio}
          gameArrIndex={gameArrIndex}
          Progress={progress}
          category={currCardsArr.categoryName}
          isGame={isGame}
        />
      );
    });
  }

  if (endGame) {
    return <GameOver endGame={endGame} />;
  }

  if (endGame === false) {
    return <GameOver endGame={endGame} />;
  }

  return (
    <div className="game-container">
      {loading === "true" ? <h1>Waiting...</h1> : cardsArr}
      <button
        className={btnClasses}
        type="button"
        onClick={() => playAudio(gameArrIndex)}
      >
        Start Game
      </button>
      <ul className="progress">{gameProgress}</ul>
    </div>
  );
};
