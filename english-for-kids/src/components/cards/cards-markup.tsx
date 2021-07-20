interface PropsCardMarkup {
  cardContainerClasses: string;
  cardClasses: string;
  imageSrc: string;
  word: string;
  translation: string;
  paramOnClickHandler: string;
  onClickHandler: (url: string) => void;
  addClass: () => void;
  removeClass: () => void;
}

export const CardMarkup = ({
  cardContainerClasses,
  cardClasses,
  imageSrc,
  word,
  translation,
  paramOnClickHandler,
  onClickHandler,
  removeClass,
  addClass,
}: PropsCardMarkup): JSX.Element => {
  return (
    <div
      className={cardContainerClasses}
      onClick={() => {
        onClickHandler(paramOnClickHandler);
      }}
      onMouseLeave={() => removeClass()}
      role="none"
    >
      <div className={cardClasses}>
        <div className="card__front">
          <img className="card__front-img" src={imageSrc} alt={`${word}`} />
          <div className="card__front-container">
            <p>{word}</p>
            <button
              className="card__front-rotateBtn"
              type="button"
              onClick={() => addClass()}
            >
              <img
                className="rotate__svg"
                src="../img/rotate.svg"
                alt="rotate"
              />
            </button>
          </div>
        </div>
        <div className="card__back">
          <img className="card__back-img" src={imageSrc} alt={`${word}`} />
          <div className="card__back-container">
            <p>{translation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
