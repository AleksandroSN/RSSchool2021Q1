import { updateData } from "../api/apiFetch";
import { FetchData } from "../api/interfaces";

export const deleteWord = async (
  arrData: FetchData,
  word: string,
  reRenderPage: () => Promise<void>,
  id: string
): Promise<void> => {
  const copyArrData = { ...arrData };
  const { categoryName, imageSrc, uniqueKey, cards } = copyArrData;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const wordIndex = arrData.cards!.findIndex((el) => el.word === word);

  const final: FetchData = {
    categoryName,
    imageSrc,
    uniqueKey,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    cards: [...cards!.slice(0, wordIndex), ...cards!.slice(wordIndex + 1)],
  };

  await updateData(final, id);
  await reRenderPage();
};
