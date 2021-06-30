import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import {DEFFAULT_GAME_MODE, gameModeContext, UpdateGameModeCTX} from "./components/game-mode/game-mode-context";
import Burger from "./components/burger-menu/Burger-menu";
import Switcher from "./components/switcher/Switcher";
import GamePage from "./pages/game-page/game-page";
import StatisticsPage from "./pages/statistics-page/statistics-page";
import MainPage from "./pages/main-page/main-page";

function App(): JSX.Element {
  const gameModeCTX = UpdateGameModeCTX();
  
  return (
    <Router>
      <gameModeContext.Provider value={gameModeCTX}>
        <div className="app-container">
          <header className="app-header">
            <Burger />
            <Switcher />
          </header>
          <main className="app-main">
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
          <footer className="app-footer">
            <a href="https://rs.school/js/">
              <img
                className="rsschool-logo"
                src="../rs_school_js.svg"
                alt="RSSCHOOL"
              />
            </a>
            <p>2021 © English for Kids</p>
          </footer>
        </div>
      </gameModeContext.Provider>
    </Router>
  );
}

export default App;
