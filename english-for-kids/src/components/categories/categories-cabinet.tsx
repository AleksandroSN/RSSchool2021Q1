import { useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteDataCategry } from "../../api/apiFetch";
import { CategoriesCreate } from "./categories-create";
import { CategoriesDummy } from "./categories-dummy";
import { CategoriesUpdate } from "./categories-update";

interface CategoryCabinet {
  name: string;
  countWords: number;
  id: string;
  reRenderPage: () => Promise<void>;
}

export const CategoriesCabinet = ({
  name,
  countWords,
  id = "0",
  reRenderPage,
}: CategoryCabinet): JSX.Element => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [addCard, setAddCard] = useState<boolean>(false);

  const linkName = name.toLowerCase().trim().replace(/\s/g, "_");

  const deleteMethod = async () => {
    await deleteDataCategry(id);
    reRenderPage();
  };

  if (editMode) {
    return (
      <CategoriesUpdate
        setEditMode={setEditMode}
        id={id}
        reRenderPage={reRenderPage}
      />
    );
  }

  if (addCard) {
    return (
      <CategoriesCreate
        setAddCard={setAddCard}
        id={id}
        reRenderPage={reRenderPage}
      />
    );
  }

  if (!name) {
    return <CategoriesDummy setAddCard={setAddCard} />;
  }

  return (
    <div className="category">
      <div
        className="category__close"
        onClick={() => deleteMethod()}
        role="none"
      >
        <img src="../../img/close.svg" alt="delete category" />
      </div>
      <p className="category__title">{name}</p>
      <p className="category__count-words">WORDS: {countWords}</p>
      <div className="category-container-btns">
        <button type="button" onClick={() => setEditMode(true)}>
          Update
        </button>
        <NavLink
          type="button"
          to={{
            pathname: `/cabinet/${linkName}/words`,
            state: {
              id,
            },
          }}
        >
          Add word
        </NavLink>
      </div>
    </div>
  );
};
