import { useState, useContext, useEffect } from "react";
import { GameMode, PLAY, TRAIN } from "../../api/types";
import { GameModeContext } from "../context/game-mode-ctx/game-mode-context";
import "./switcher.scss";

export const Switcher = (): JSX.Element => {
  const [gameMode, setGameMode] = useState(TRAIN as GameMode);
  const { setMode } = useContext(GameModeContext);

  let checked = false;

  if (gameMode === (PLAY as GameMode)) {
    checked = true;
  }

  const changeGameMode = (): void => {
    setGameMode(gameMode === TRAIN ? PLAY : TRAIN);
  };

  useEffect(() => {
    setMode(gameMode);
  }, [setMode, gameMode]);

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label" htmlFor="toggleSwitch">
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          defaultChecked={checked}
        />

        <span className="toggle-switch__train">Train</span>
        <span
          className="toggle-switch__play"
          onClick={() => {
            changeGameMode();
          }}
          role="none"
        >
          Play
        </span>
        <span className="toggle-switch__tumbler"></span>
      </label>
    </div>
  );
};
