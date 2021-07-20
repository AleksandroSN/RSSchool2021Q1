import { useState } from "react";
import { Word } from "../../api/interfaces";
import { deleteWord } from "../../utils/HandlerDeleteWords";
import { playAudio } from "../../utils/playAudio";
import { sliceAudioName } from "../../utils/sliceAudioName";
import { WordDummy } from "./words-dummy";
import { UpdateAndCreateWord } from "./words-update-create";
import "./words.scss";

export const Words = ({
  word,
  translation,
  soundFileSrc,
  image,
  id,
  arrData,
  reRenderPage,
}: Word): JSX.Element => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<boolean>(false);

  const soundFile = sliceAudioName(soundFileSrc);

  const createNewWord = () => {
    setEditMode(true);
    setIsNew(true);
  };

  const deleteMethod = async () => {
    await deleteWord(arrData, word, reRenderPage, id);
  };

  if (editMode) {
    return (
      <UpdateAndCreateWord
        setEditMode={setEditMode}
        isNew={isNew}
        setIsNew={setIsNew}
        arrData={arrData}
        id={id}
        reRenderPage={reRenderPage}
        word={word}
      />
    );
  }

  if (!word) {
    return <WordDummy createNewWord={createNewWord} />;
  }

  return (
    <div className="word">
      <div className="word__close" onClick={() => deleteMethod()} role="none">
        <img src="../../img/close.svg" alt="delete word" />
      </div>
      <p className="word__title">Word: {word}</p>
      <p className="word__translation">Translation: {translation}</p>
      <p className="word__audio">
        <button type="button" onClick={() => playAudio(soundFileSrc)}>
          PLAY
        </button>
        Audio: {soundFile}
      </p>
      <img className="word__image" src={`${image}`} alt="wallper word" />
      <div className="word-container-btns">
        <button type="button" onClick={() => setEditMode(true)}>
          Update
        </button>
      </div>
    </div>
  );
};
