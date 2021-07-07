import { Route, Switch } from "react-router-dom";
import GamePage from "../../pages/game-page/game-page";
import MainPage from "../../pages/main-page/main-page";
import StatisticsPage from "../../pages/statistics-page/statistics-page";
import "./main.scss";

export const Main = (): JSX.Element => {
  return (
    <main className="app-main">
      <h2 className="app-main__text">English with Simpsons</h2>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/game" exact component={GamePage} />
        <Route
          path="/game/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <GamePage id={id} />;
          }}
        />
        <Route path="/statistics" component={StatisticsPage} />
      </Switch>
    </main>
  );
};
