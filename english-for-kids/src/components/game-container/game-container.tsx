import { useContext, useEffect, useReducer } from "react";
import { Card, FetchData, gameSound } from "../../api/interfaces";
import { GameMode, PLAY } from "../../api/types";
import { gameOverAudio } from "../../utils/game-over-audio";
import { ProgressStar } from "../../utils/progressStars";
import { shuffleArray } from "../../utils/shuffleArray";
import { Cards } from "../cards/cards";
import { GameModeContext } from "../context/game-mode-ctx/game-mode-context";
import { GameOver } from "../game-over/game-over";
import "./game-container.scss";
import {
  gamePageReducer,
  GAME_ACTIONS,
  initialGameState,
} from "./game-page-reducer";
import { PropsGameContainer } from "./props-game-container";

export const GameContainer = ({
  id,
  result,
  loading,
}: PropsGameContainer): JSX.Element => {
  const index = Number(id) - 1;
  const currCardsArr: FetchData = result[index] as FetchData;
  const gameModeCTX = useContext(GameModeContext);
  const [state, dispatch] = useReducer(gamePageReducer, initialGameState);

  useEffect(() => {
    (function createShuffleArr() {
      if (currCardsArr) {
        const shuffleArr = shuffleArray(currCardsArr.cards as Card[]);
        dispatch({
          type: GAME_ACTIONS.SET_START_GAME,
          payload: { gameArr: shuffleArr },
        });
      }
    })();
  }, [currCardsArr]);

  let btnClasses = "game-container__button";

  if (gameModeCTX.gameMode === (PLAY as GameMode)) {
    btnClasses += " show";
  }

  if (state.isGame) {
    btnClasses += " game-container__button-game";
  }

  const startGame = (idx: number) => {
    dispatch({ type: GAME_ACTIONS.SET_GAME_MODE, payload: { isGame: true } });
    if (state.activeSound) {
      state.activeSound.audio.play();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const audio = new Audio(state.gameArr![idx].audioSrc);
      audio.play();
      dispatch({
        type: GAME_ACTIONS.SET_NEXT_AUDIO,
        payload: {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          activeSound: { audio, word: state.gameArr![idx].word },
          gameArrIndex: (state.gameArrIndex += 1),
        },
      });
    }
  };

  const nextAudio = (idx: number) => {
    if (state.gameArrIndex === state.gameArr?.length) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const audio = new Audio(state.gameArr![idx].audioSrc);
    audio.play();
    dispatch({
      type: GAME_ACTIONS.SET_NEXT_AUDIO,
      payload: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        activeSound: { audio, word: state.gameArr![idx].word },
        gameArrIndex: (state.gameArrIndex += 1),
      },
    });
  };

  const stars: JSX.Element[] = state.progressArr.map((el: boolean) => {
    return <ProgressStar isCorrect={el} />;
  });

  const progress = (status: boolean) => {
    if (state.gameArrIndex === state.gameArr?.length) {
      dispatch({
        type: GAME_ACTIONS.SET_GAME_MODE,
        payload: { isGame: false },
      });
      if (state.errors > 0) {
        gameOverAudio(false);
        dispatch({
          type: GAME_ACTIONS.SET_ENDGAME,
          payload: { endGame: false },
        });
      } else {
        gameOverAudio(true);
        dispatch({
          type: GAME_ACTIONS.SET_ENDGAME,
          payload: { endGame: true },
        });
      }
    }
    if (status) {
      dispatch({
        type: GAME_ACTIONS.SET_PROGRESS_ARR_CORRECT,
        payload: { progressArr: [...state.progressArr, true] },
      });
    } else {
      dispatch({
        type: GAME_ACTIONS.SET_PROGRESS_ARR_UNCORRECT,
        payload: {
          progressArr: [...state.progressArr, false],
          errors: (state.errors += 1),
        },
      });
    }
  };

  let cardsArr: JSX.Element[] = [];
  if (currCardsArr) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    cardsArr = currCardsArr.cards!.map((card, i) => {
      return (
        <Cards
          key={i}
          word={card.word}
          translation={card.translation}
          imageSrc={card.imageSrc}
          audioSrc={card.audioSrc}
          activeSound={state.activeSound as gameSound}
          NextAudio={nextAudio}
          gameArrIndex={state.gameArrIndex}
          Progress={progress}
          category={currCardsArr.categoryName}
          isGame={state.isGame}
        />
      );
    });
  }

  if (state.endGame) {
    return <GameOver endGame={state.endGame} />;
  }

  if (state.endGame === false) {
    return <GameOver endGame={state.endGame} />;
  }

  return (
    <div className="game-container">
      {loading === "true" ? <h1>Waiting...</h1> : cardsArr}
      <button
        className={btnClasses}
        type="button"
        onClick={() => startGame(state.gameArrIndex)}
      >
        Start Game
      </button>
      <ul className="progress">{stars}</ul>
    </div>
  );
};
