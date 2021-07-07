import { useState } from "react";
import { Redirect } from "react-router-dom";
import { GameOverState } from "../../api/interfaces";
import "./game-over.scss";

export const GameOver = ({ endGame }: GameOverState): JSX.Element => {
  const [redirect, setRedirect] = useState<boolean>(false);

  if (redirect) {
    return <Redirect to="/" />;
  }

  setTimeout(() => setRedirect(true), 3000);

  if (endGame) {
    return (
      <div className="game-over">
        <p className="game-over__text">Well Done!</p>
        <img className="game-over__img" src="/img/success.jpg" alt="succes" />
      </div>
    );
  }
  return (
    <div className="game-over">
      <p className="game-over__text">Try again</p>
      <img className="game-over__img" src="/img/failure.jpg" alt="failure" />
    </div>
  );
};
