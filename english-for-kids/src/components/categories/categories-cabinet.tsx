import { useState } from "react";
import { NavLink } from "react-router-dom";

interface CategoryCabinet {
  name: string;
  countWords: number;
}

export const CategoriesCabinet = ({ name, countWords }: CategoryCabinet) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const linkName = name.toLowerCase().trim().replace(/\s/g, "-");

  if (editMode) {
    return (
      <form className="category">
        <label className="category__label" htmlFor="categoryUpdate">
          Category Name :
          <input
            className="category__input"
            type="text"
            name="categoryUpdate"
            id="categoryUpdate"
            placeholder="New category name"
          />
        </label>
        <div className="category-container-btns">
          <button type="button" onClick={() => setEditMode(false)}>
            Cancel
          </button>
          <button type="button">Update</button>
        </div>
      </form>
    );
  }

  // TODO onclick add ARROW UP Component
  if (!name) {
    return (
      <div className="category">
        <p className="category__title">Create new category</p>
        <img
          className="category__img-cross"
          src="../../img/cross.svg"
          alt="add new category"
        />
      </div>
    );
  }

  return (
    <div className="category">
      <div className="category__close">
        <img src="../../img/close.svg" alt="delete category" />
      </div>
      <p className="category__title">{name}</p>
      <p className="category__count-words">WORDS: {countWords}</p>
      <div className="category-container-btns">
        <button type="button" onClick={() => setEditMode(true)}>
          Update
        </button>
        <NavLink type="button" to={`/cabinet/${linkName}/words`}>
          Add word
        </NavLink>
      </div>
    </div>
  );
};
