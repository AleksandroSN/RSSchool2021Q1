import { useForm } from "react-hook-form";
import { CreateNewFile } from "../../utils/createNewFile";
import { HandlerCreateCategories } from "../../utils/HandlerCreateCategoies";
import { Input } from "../inputs/inputs";
import { FormValues } from "../inputs/inputs-props-interface";

interface CreateCard {
  setAddCard: React.Dispatch<React.SetStateAction<boolean>>;
  reRenderPage: () => Promise<void>;
  id: string;
}

export const CategoriesCreate = ({
  setAddCard,
  id,
  reRenderPage,
}: CreateCard): JSX.Element => {
  const { register, handleSubmit } = useForm<FormValues>();
  const newId = String(Number(id) + 1);
  const onSubmit = async (data: FormValues) => {
    const files = data.Image as FileList;
    const file = files[0];
    const fileName = files[0].name;
    if (files) {
      await CreateNewFile(file, fileName);
    }

    // await CreateNewFile(); - for default values

    await HandlerCreateCategories(data["Category Name"], fileName, newId);

    await reRenderPage();
    setAddCard(false);
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
        <button type="button" onClick={() => setAddCard(false)}>
          Cancel
        </button>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};
