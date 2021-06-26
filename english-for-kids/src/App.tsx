import React from "react";
import "./App.scss";
import Burger from "./components/burger-menu/Burger-menu";
import Switcher from "./components/switcher/Switcher";
import GameContainer from "./components/game-container/game-container";

function App(): JSX.Element {
  return (
    <div className="app-container">
      <header className="app-header">
        <Burger />
        <Switcher />
      </header>
      <main className="app-main">
        <GameContainer />
      </main>
      <footer className="app-footer">
        <a href="https://rs.school/js/">
          <img
            className="rsschool-logo"
            src="./rs_school_js.svg"
            alt="RSSCHOOL"
          />
        </a>
        <p>2021 © English for Kids</p>
      </footer>
    </div>
  );
}

export default App;
