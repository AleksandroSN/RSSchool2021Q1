interface PropsCategoriesDummy {
  setAddCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CategoriesDummy = ({
  setAddCard,
}: PropsCategoriesDummy): JSX.Element => {
  return (
    <div className="category" onClick={() => setAddCard(true)} role="none">
      <p className="category__title">Create new category</p>
      <img
        className="category__img-cross"
        src="../../img/cross.svg"
        alt="add new category"
      />
    </div>
  );
};
