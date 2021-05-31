import { AboutGame } from "../pages/aboutGame";
import { BestScore } from "../pages/bestScore";
import { Game } from "../pages/game";
import { GameSettings } from "../pages/gameSettings";
import { Render } from "../render/render";

const render = Render.getInstance();
const aboutGamePage = new AboutGame();
const gamePage = Game.getInstance();
const gameSettingsPage = GameSettings.getInstance();
const bestScorePage = new BestScore();

export const routing: Array<{ name: string; component(): void }> = [
  {
    name: "about",
    component: () => {
      render.renderPage(aboutGamePage.element, "about");
    },
  },
  {
    name: "best-score",
    component: () => {
      bestScorePage.getPlayerData();
      render.renderPage(bestScorePage.element, "best-score");
    },
  },
  {
    name: "game-settings",
    component: () => {
      render.renderPage(gameSettingsPage.element, "game-settings");
    },
  },
  {
    name: "game",
    component: () => {
      render.renderPage(gamePage.element);
    },
  },
];
