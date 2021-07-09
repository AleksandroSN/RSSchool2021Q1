import { useContext, useState, useEffect } from "react";
import DummyServer from "../../api/dummyMocks";
import { Card, Data, gameSound } from "../../api/interfaces";
import { PropsGamePage } from "../../pages/game-page/game-page-props";
import { GameOverAudio } from "../../utils/game-over-audio";
import { winStar, loseStar } from "../../utils/progressStars";
import { shuffleArray } from "../../utils/shuffleArray";
import Cards from "../cards/cards";
import { gameModeContext } from "../game-mode-ctx/game-mode-context";
import { GameOver } from "../game-over/game-over";
import "./game-container.scss";

const GameContainer = ({ id }: PropsGamePage): JSX.Element => {
  const gameModeCTX = useContext(gameModeContext);
  const [isGame, setIsGame] = useState<boolean>(false);
  const [gameArr, setGameArr] = useState<Card[]>();
  const [gameArrIndex, setGameArrIndex] = useState<number>(0);
  const [activeSound, setActiveSound] = useState<gameSound | null>(null);
  const [gameProgress, setGameProgress] = useState<JSX.Element[]>([]);
  const [endGame, setEndGame] = useState<boolean>();
  const [errors, setErrors] = useState<number>(0);

  const [result, loading] = DummyServer();
  const index = Number(id) - 1;
  const currArrCards: Data = result[index] as Data;

  useEffect(() => {
    (async function createShuffleArr() {
      if (currArrCards) {
        const shuffleArr = await shuffleArray(currArrCards.cards);
        setGameArr(shuffleArr);
        setIsGame(false);
        setActiveSound(null);
      }
    })();
  }, [currArrCards]);

  let btnClasses = "game-container__button";

  if (gameModeCTX.gameMode === "PLAY") {
    btnClasses += " show";
  }

  if (isGame) {
    btnClasses += " game-container__button-game";
  }

  const PlayAudio = (idx: number) => {
    setIsGame(true);
    if (activeSound) {
      activeSound.audio.play();
    } else {
      const audio = new Audio(gameArr![idx].audioSrc);
      setActiveSound({ audio, word: gameArr![idx].word });
      audio.play();
      setGameArrIndex((x) => x + 1);
    }
  };

  const NextAudio = (idx: number) => {
    if (gameArrIndex === gameArr?.length) {
      return;
    }
    const audio = new Audio(gameArr![idx].audioSrc);
    setActiveSound({ audio, word: gameArr![idx].word });
    audio.play();
    setGameArrIndex((x) => x + 1);
  };

  const Progress = (status: boolean) => {
    if (gameArrIndex === gameArr?.length) {
      setIsGame(false);
      if (errors > 0) {
        GameOverAudio(false);
        setEndGame(false);
      } else {
        GameOverAudio(true);
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

  if (endGame) {
    return <GameOver endGame={endGame} />;
  }

  if (endGame === false) {
    return <GameOver endGame={endGame} />;
  }

  return (
    <div className="game-container">
      {loading === "true" ? (
        <h1>Waiting...</h1>
      ) : (
        currArrCards.cards.map((card, i) => {
          return (
            <Cards
              key={i}
              word={card.word}
              translation={card.translation}
              image={card.image}
              audioSrc={card.audioSrc}
              activeSound={activeSound!}
              NextAudio={NextAudio}
              gameArrIndex={gameArrIndex}
              Progress={Progress}
              category={currArrCards.category.name}
              isGame={isGame}
            />
          );
        })
      )}
      <button
        className={btnClasses}
        type="button"
        onClick={() => PlayAudio(gameArrIndex)}
      >
        Start Game
      </button>
      <ul className="progress">{gameProgress}</ul>
    </div>
  );
};

export default GameContainer;
