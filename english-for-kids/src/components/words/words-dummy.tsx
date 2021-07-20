interface PropsWordDummy {
  createNewWord: () => void;
}

export const WordDummy = ({ createNewWord }: PropsWordDummy): JSX.Element => {
  return (
    <div className="category" onClick={() => createNewWord()} role="none">
      <p className="category__title">Create new word</p>
      <img
        className="category__img-cross"
        src="../../img/cross.svg"
        alt="add new category"
      />
    </div>
  );
};
