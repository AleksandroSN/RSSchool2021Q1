import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { HandlerUploadCategories } from "../../utils/HandlerUploadCategories";
import { Input } from "../inputs/inputs";
import { FormValues } from "../inputs/inputs-props-interface";

interface UpdateCard {
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  reRenderPage: () => Promise<void>;
  id: string;
}

export const CategoriesUpdate = ({
  setEditMode,
  id,
  reRenderPage,
}: UpdateCard): JSX.Element => {
  const { register, handleSubmit, watch } = useForm<FormValues>();
  const { file, fileName, SetTarget, UpdateCategoryName, FullUpdateCategory } =
    HandlerUploadCategories();

  const watchImage = watch("Image");

  useEffect(() => {
    if (watchImage) {
      SetTarget(watchImage as FileList);
    }
  }, [watchImage, SetTarget]);

  const onSubmit = async (data: FormValues) => {
    if (file && fileName) {
      await FullUpdateCategory(id, data["Category Name"]);
    } else {
      await UpdateCategoryName(id, data["Category Name"]);
    }
    setEditMode(false);
    reRenderPage();
  };

  return (
    <form className="category" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Category Name"
        type="text"
        labelFor="categoryUpdate"
        inputClass="category__input"
        register={register}
        required
      />
      <Input
        label="Image"
        type="file"
        labelFor="categoryUpdate"
        inputClass="category__input"
        register={register}
        required={false}
      />
      <div className="category-container-btns">
        <button type="button" onClick={() => setEditMode(false)}>
          Cancel
        </button>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};
