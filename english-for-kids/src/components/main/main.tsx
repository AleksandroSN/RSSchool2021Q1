import { useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import GamePage from "../../pages/game-page/game-page";
import MainPage from "../../pages/main-page/main-page";
import { StatisticsPage } from "../../pages/statistics-page/statistics-page";
import { OpenModalContext } from "../context/modal-window-ctx/modal-window";
import { ModalAuthorize } from "../modals/authorize";
import { Overlay } from "../overlay/overlay";
import "./main.scss";

export const Main = (): JSX.Element => {
  const { path } = useRouteMatch();
  const { isOpen } = useContext(OpenModalContext);

  return (
    <main className="app-main">
      <h2 className="app-main__text">English with Simpsons</h2>
      <Switch>
        <Route path={path} exact component={MainPage} />
        <Route path="/game/statistics" component={StatisticsPage} />
        <Route
          path={`${path}/:id`}
          render={({ match }) => {
            const { id } = match.params;
            return <GamePage id={id} />;
          }}
        />
      </Switch>
      <Overlay visible={isOpen} />
      <ModalAuthorize visible={isOpen} />
    </main>
  );
};
