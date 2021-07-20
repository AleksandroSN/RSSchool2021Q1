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

  const title = {
    text: endGame ? "Well done" : "Try aganin",
    image: endGame ? "/img/success.jpg" : "/img/failure.jpg",
  };
  return (
    <div className="game-over">
      <p className="game-over__text">{title.text}</p>
      <img className="game-over__img" src={title.image} alt="succes" />
    </div>
  );
};
