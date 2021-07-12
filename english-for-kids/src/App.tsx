import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import {
  gameModeContext,
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
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { HeaderCabinet } from "./components/header/header-cabinet";
import { MainCabinet } from "./components/main/main-cabinet";

function App(): JSX.Element {
  const gameModeCTX = UpdateGameModeCTX();
  const openNavCTX = UpdateOpenNavCTX();
  const openModalCTX = UpdateOpenModalCTX();

  return (
    <Router>
      <OpenNavContext.Provider value={openNavCTX}>
        <OpenModalContext.Provider value={openModalCTX}>
          <gameModeContext.Provider value={gameModeCTX}>
            <Switch>
              <Redirect from="/" to="/game" exact />
              <Route path="/game">
                <div
                  className="app-container"
                  onClick={() => openNavCTX.setMode(false)}
                  role="none"
                >
                  <Header />
                  <Main />
                  <Footer />
                </div>
              </Route>
              <Route path="/cabinet">
                <div className="app-container">
                  <HeaderCabinet />
                  <MainCabinet />
                  <Footer />
                </div>
              </Route>
            </Switch>
          </gameModeContext.Provider>
        </OpenModalContext.Provider>
      </OpenNavContext.Provider>
    </Router>
  );
}

export default App;
