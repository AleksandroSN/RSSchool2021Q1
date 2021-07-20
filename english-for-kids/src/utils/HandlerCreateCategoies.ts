import { BASE, createData } from "../api/apiFetch";

export const HandlerCreateCategories = async (
  inputValue: string,
  fileName: string,
  id: string
): Promise<void> => {
  const newCat = {
    categoryName: inputValue,
    imageSrc: `${BASE}/${fileName}`,
    uniqueKey: `${id}`,
  };
  await createData(newCat);
};
