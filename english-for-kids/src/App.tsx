import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import {
  gameModeContext,
  UpdateGameModeCTX,
} from "./components/game-mode/game-mode-context";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

function App(): JSX.Element {
  const gameModeCTX = UpdateGameModeCTX();

  return (
    <Router>
      <gameModeContext.Provider value={gameModeCTX}>
        <div className="app-container">
          <Header />
          <Main />
          <Footer />
        </div>
      </gameModeContext.Provider>
    </Router>
  );
}

export default App;
