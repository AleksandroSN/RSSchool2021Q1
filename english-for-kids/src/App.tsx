import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import {
  GameModeContext,
  UpdateGameModeCTX,
} from "./components/context/game-mode-ctx/game-mode-context";
import {
  OpenNavContext,
  UpdateOpenNavCTX,
} from "./components/context/open-nav-ctx/open-nav";
import {
  OpenModalContext,
  UpdateOpenModalCTX,
} from "./components/context/modal-window-ctx/modal-window";
import {
  IsAuthContext,
  UpdateIsAuthCTX,
} from "./components/context/authorization-ctx/authorization-ctx";
import { Cabinet } from "./routes/cabinet";
import { Game } from "./routes/game";

function App(): JSX.Element {
  const gameModeCTX = UpdateGameModeCTX();
  const openNavCTX = UpdateOpenNavCTX();
  const openModalCTX = UpdateOpenModalCTX();
  const authorizationCTX = UpdateIsAuthCTX();

  return (
    <Router>
      <IsAuthContext.Provider value={authorizationCTX}>
        <OpenNavContext.Provider value={openNavCTX}>
          <OpenModalContext.Provider value={openModalCTX}>
            <GameModeContext.Provider value={gameModeCTX}>
              <Switch>
                <Redirect from="/" to="/game" exact />
                <Route path="/game" component={Game} />
                <Route
                  path="/cabinet"
                  render={() => {
                    return authorizationCTX.isAuth ? (
                      <Cabinet />
                    ) : (
                      <Redirect to="/game" />
                    );
                  }}
                />
              </Switch>
            </GameModeContext.Provider>
          </OpenModalContext.Provider>
        </OpenNavContext.Provider>
      </IsAuthContext.Provider>
    </Router>
  );
}

export default App;
