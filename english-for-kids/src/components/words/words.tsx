import { useState } from "react";
import "./words.scss";

interface Word {
  word: string;
  translation: string;
  soundFileSrc: string;
  image: string;
}

export const Words = ({ word, translation, soundFileSrc, image }: Word) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const soundFile = soundFileSrc.substr(soundFileSrc.lastIndexOf("/") + 1);

  if (editMode) {
    return (
      <form className="word">
        <label className="category__label" htmlFor="categoryUpdate">
          Category Name :
          <input
            className="category__input"
            type="text"
            name="categoryUpdate"
            // id="categoryUpdate"
            placeholder="New word name"
          />
        </label>
        <label className="category__label" htmlFor="categoryUpdate">
          Category Name :
          <input
            className="category__input"
            type="text"
            name="categoryUpdate"
            // id="categoryUpdate"
            placeholder="New translation name"
          />
        </label>
        <label className="category__label" htmlFor="categoryUpdate">
          Sound :
          <input
            className="category__input"
            type="file"
            name="categoryUpdate"
            // id="categoryUpdate"
          />
        </label>
        <label className="category__label" htmlFor="categoryUpdate">
          Image :
          <input
            className="category__input"
            type="file"
            name="categoryUpdate"
            // id="categoryUpdate"
          />
        </label>
      </form>
    );
  }

  return (
    <div className="word">
      <div className="word__close">
        <img src="../../img/close.svg" alt="delete word" />
      </div>
      <p className="word__title">Word: {word}</p>
      <p className="word__translation">Translation: {translation}</p>
      <p className="word__audio">Audio: {soundFile}</p>
      <img className="word__image" src={`${image}`} alt="wallper word" />
      <div className="word-container-btns">
        <button type="button" onClick={() => setEditMode(true)}>
          Change
        </button>
      </div>
    </div>
  );
};
