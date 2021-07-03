import React, { createContext, useState, useCallback } from "react";

export interface GameModeCTX {
  gameMode: string;
  setMode: (activeMode: string) => void;
}

const DEFFAULT_GAME_MODE: GameModeCTX = {
  gameMode: "TRAIN",
  setMode: () => {},
};

export const gameModeContext = createContext<GameModeCTX>(DEFFAULT_GAME_MODE);

export const UpdateGameModeCTX = (): GameModeCTX => {
  const [gameMode, setGameMode] = useState("TRAIN");

  const setMode = useCallback((activeMode: string): void => {
    setGameMode(activeMode);
  }, []);

  return {
    gameMode,
    setMode,
  };
};
