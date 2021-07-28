import { GetAlldata } from "../../api/apiFetch";
import { FetchData } from "../../api/interfaces";
import { CategoriesCabinet } from "../../components/categories/categories-cabinet";
import { findLastEl } from "../../utils/findLastEl";
import "./admin-page.scss";

export const AdminPage = (): JSX.Element => {
  const { result, getData } = GetAlldata();
  const arrData: FetchData[] = result as FetchData[];

  const reRenderPage = async () => {
    await getData();
  };

  const categories = arrData.map(({ categoryName, uniqueKey, cards }) => {
    return (
      <CategoriesCabinet
        name={categoryName}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        countWords={cards!.length}
        id={uniqueKey as string}
        reRenderPage={reRenderPage}
      />
    );
  });

  const lastID = findLastEl(result);

  const modifyCategories = [
    ...categories,
    CategoriesCabinet({ name: "", countWords: 0, id: lastID, reRenderPage }),
  ];

  return <div className="app-main__cabinet">{modifyCategories}</div>;
};
