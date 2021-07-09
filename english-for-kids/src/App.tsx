import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import {
  gameModeContext,
  UpdateGameModeCTX,
} from "./components/game-mode-ctx/game-mode-context";
import {
  OpenNavContext,
  UpdateOpenNavCTX,
} from "./components/open-nav-ctx/open-nav";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

function App(): JSX.Element {
  const gameModeCTX = UpdateGameModeCTX();
  const openNavCTX = UpdateOpenNavCTX();
  return (
    <Router>
      <OpenNavContext.Provider value={openNavCTX}>
        <gameModeContext.Provider value={gameModeCTX}>
          <div
            className="app-container"
            onClick={() => openNavCTX.setMode(false)}
            role="none"
          >
            <Header />
            <Main />
            <Footer />
          </div>
        </gameModeContext.Provider>
      </OpenNavContext.Provider>
    </Router>
  );
}

export default App;
