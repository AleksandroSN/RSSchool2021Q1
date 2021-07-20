import { GetAlldata } from "../../api/apiFetch";
import MainPageContainer from "../../components/main-page-container/main-page-container";

const MainPage = (): JSX.Element => {
  const { result } = GetAlldata();

  return (
    <div className="app-main-page">
      <MainPageContainer arrData={result} />
    </div>
  );
};

export default MainPage;
