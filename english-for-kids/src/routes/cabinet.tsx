import { Footer } from "../components/footer/footer";
import { HeaderCabinet } from "../components/header/header-cabinet";
import { MainCabinet } from "../components/main/main-cabinet";

export const Cabinet = (): JSX.Element => {
  return (
    <div className="app-container">
      <HeaderCabinet />
      <MainCabinet />
      <Footer />
    </div>
  );
};
