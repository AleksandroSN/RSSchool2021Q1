import React, { useContext, useState, useEffect } from "react";
import DummyServer from "../../api/dummyMocks";
import { Card, Data, gameSound } from "../../api/interfaces";
import { PropsGamePage } from "../../pages/game-page/game-page-props";
import { shuffleArray } from "../../utils/shuffleArray";
import Cards from "../cards/cards";
import { gameModeContext } from "../game-mode/game-mode-context";
import "./game-container.scss";

const GameContainer = ({ id }: PropsGamePage): JSX.Element => {
  const gameModeCTX = useContext(gameModeContext);
  const [isGame, setIsGame] = useState(false);
  const [gameArr, setGameArr] = useState<Card[]>();
  const [gameArrIndex, setGameArrIndex] = useState<number>(0);
  const [activeSound, setActiveSound] = useState<gameSound | null>(null);

  const [result, loading] = DummyServer();
  const index = Number(id) - 1;
  const currArrCards: Data = result[index] as Data;

  useEffect(() => {
    (async function createShuffleArr() {
      if (currArrCards) {
        const shuffleArr = await shuffleArray(currArrCards.cards);
        setGameArr(shuffleArr);
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

  const PlayAudio = async (idx: number) => {
    setIsGame(true);
    if (activeSound) {
      activeSound.audio.play();
    } else {
      const audio = new Audio(gameArr![idx].audioSrc);
      await setActiveSound({ audio, word: gameArr![idx].word });
      audio.play();
      setGameArrIndex((x) => x + 1);
    }
  };

  const NextAudio = (idx: number) => {
    const audio = new Audio(gameArr![idx].audioSrc);
    setActiveSound({ audio, word: gameArr![idx].word });
    audio.play();
    setGameArrIndex((x) => x + 1);
  };

  return (
    <div className="game-container">
      {loading === "true" ? (
        <h1>Waiting...</h1>
      ) : (
        currArrCards.cards.map((card) => {
          return (
            <Cards
              word={card.word}
              translation={card.translation}
              image={card.image}
              audioSrc={card.audioSrc}
              activeSound={activeSound!}
              NextAudio={NextAudio}
              gameArrIndex={gameArrIndex}
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
    </div>
  );
};

export default GameContainer;
