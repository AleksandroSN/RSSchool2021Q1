import DummyServer from "../../api/dummyMocks";
import { Data } from "../../api/interfaces";
import { CategoriesCabinet } from "../../components/categories/categories-cabinet";
import "./admin-page.scss";

export const AdminPage = () => {
  const [result] = DummyServer();

  const arrData: Data[] = result as Data[];

  const categories = arrData.map(({ category, cards }) => {
    return <CategoriesCabinet name={category.name} countWords={cards.length} />;
  });

  const modifyCategories = [
    ...categories,
    CategoriesCabinet({ name: "", countWords: 0 }),
  ];

  return <div className="app-main__cabinet">{modifyCategories}</div>;
};
