import DummyServer from "../../api/dummyMocks";
import { Data } from "../../api/interfaces";
import { Words } from "./words";

import "./words-page.scss";

interface PropsWords {
  category: string;
}

export const WordsPage = ({ category }: PropsWords) => {
  const [result] = DummyServer();

  const arrData: Data[] = result as Data[];

  const newArr = arrData[0] as Data;

  let words: JSX.Element[] = [];

  if (newArr) {
    words = newArr.cards.map((x) => {
      return (
        <Words
          word={x.word}
          translation={x.translation}
          soundFileSrc={x.audioSrc}
          image={x.image}
        />
      );
    });
  }

  return (
    <div className="app-main__words-page">
      <p className="app-main__words-page__title">
        Category :
        <span className="app-main__words-page__subtitle"> {category}</span>
      </p>
      <div className="app-main__words-page__contaner">{words}</div>
    </div>
  );
};
