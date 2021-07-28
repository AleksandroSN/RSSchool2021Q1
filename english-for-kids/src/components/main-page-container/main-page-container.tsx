import { Categories } from "../categories/categories";
import { PropsMainPageContainer } from "./main-p-props-interface";
import "./main-page-container.scss";

export const MainPageContainer = ({
  arrData,
}: PropsMainPageContainer): JSX.Element => {
  const cards = arrData.map(({ imageSrc, categoryName, uniqueKey }, i) => {
    return (
      <Categories
        key={i}
        image={imageSrc as string}
        name={categoryName}
        id={uniqueKey as string}
      />
    );
  });

  return <div className="app-main-page__container">{cards}</div>;
};
