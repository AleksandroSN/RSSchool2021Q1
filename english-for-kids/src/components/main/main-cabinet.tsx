import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AdminPage } from "../../pages/admin-page/admin-page";
import { WordsPage } from "../words/wordsPage";

export const MainCabinet = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <main className="app-main app-main--flex">
      <Switch>
        <Route path={path} exact component={AdminPage} />
        <Route
          path={`${path}/:category/words`}
          render={({ match }) => {
            const { category } = match.params;
            return <WordsPage category={category} />;
          }}
        />
      </Switch>
    </main>
  );
};
