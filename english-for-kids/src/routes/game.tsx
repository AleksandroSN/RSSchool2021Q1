import { useContext } from "react";
import { OpenNavContext } from "../components/context/open-nav-ctx/open-nav";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";

export const Game = (): JSX.Element => {
  const { openNav } = useContext(OpenNavContext);

  return (
    <div className="app-container" onClick={() => openNav(false)} role="none">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
