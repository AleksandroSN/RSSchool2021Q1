import { createContext, useState, useCallback } from "react";
import { GameMode, TRAIN } from "../../../api/types";

export interface GameModeCTX {
  gameMode: string;
  setMode: (activeMode: GameMode) => void;
}

const DEFFAULT_GAME_MODE: GameModeCTX = {
  gameMode: TRAIN as GameMode,
  setMode: () => {},
};

export const GameModeContext = createContext<GameModeCTX>(DEFFAULT_GAME_MODE);

export const UpdateGameModeCTX = (): GameModeCTX => {
  const [gameMode, setGameMode] = useState(TRAIN as GameMode);

  const setMode = useCallback((activeMode: GameMode): void => {
    setGameMode(activeMode);
  }, []);

  return {
    gameMode,
    setMode,
  };
};
