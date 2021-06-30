import React, { useState,useContext } from "react";
import { GameMode, PLAY, TRAIN } from "../../api/types";
import { gameModeContext } from "../game-mode/game-mode-context";
import "./switcher.scss";

const Switcher = () => {
  const [gameMode, setGameMode] = useState(TRAIN as GameMode);
  const {setMode} = useContext(gameModeContext);
  let checked = false;

  if (gameMode === (PLAY as GameMode)) {
    checked = true;
  }

  const changeGameMode = (): void => {
    setGameMode((mode) => {
      let game = mode;
      if (game === (PLAY as GameMode)) {
        game = TRAIN as GameMode;
        // sessionStorage.setItem("gameMode", game);
        setMode(game);
        return game;
      }
      game = PLAY as GameMode;
      // sessionStorage.setItem("gameMode", game);
      setMode(game);
      return game;
    });
  };

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label" htmlFor="toggleSwitch">
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          checked={checked}
        />

        <span className="toggle-switch__train">Train</span>
        <span
          className="toggle-switch__play"
          onClick={() => changeGameMode()}
          role="none"
        >
          Play
        </span>
        <span className="toggle-switch__tumbler"></span>
      </label>
    </div>
  );
};

export default Switcher;
