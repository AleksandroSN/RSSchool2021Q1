import { useLocation } from "react-router-dom";
import { GetAlldata } from "../../api/apiFetch";
import { FetchData } from "../../api/interfaces";
import { Words } from "./words";

import "./words-page.scss";

interface PropsWords {
  category: string;
}

interface StateTypeWordsPage {
  state: { id: string };
  id: string;
}

export const WordsPage = ({ category }: PropsWords): JSX.Element => {
  const { state } = useLocation<StateTypeWordsPage>();
  const { id } = state;
  const idx = Number(id) - 1;

  const { result, getData } = GetAlldata();

  const reRenderPage = async () => {
    await getData();
  };

  const arrData: FetchData = result[idx] as FetchData;

  let words: JSX.Element[] = [];

  if (arrData) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    words = arrData.cards!.map((x) => {
      return (
        <Words
          word={x.word}
          translation={x.translation}
          soundFileSrc={x.audioSrc}
          image={x.imageSrc}
          id={id}
          arrData={arrData}
          reRenderPage={reRenderPage}
        />
      );
    });
  }

  const modifyArrWords = [
    ...words,
    Words({
      word: "",
      translation: "",
      soundFileSrc: "",
      image: "",
      id,
      arrData,
      reRenderPage,
    }),
  ];

  return (
    <div className="app-main__words-page">
      <p className="app-main__words-page__title">
        Category :
        <span className="app-main__words-page__subtitle"> {category}</span>
      </p>
      <div className="app-main__words-page__contaner">{modifyArrWords}</div>
    </div>
  );
};
