import React from "react";
import GameContainer from "../../components/game-container/game-container";
import { PropsGamePage } from "./game-page-props";

const GamePage = ({ id }: PropsGamePage): JSX.Element => {
  return (
    <div className="app-game-page">
      <GameContainer id={id} />
    </div>
  );
};

export default GamePage;
