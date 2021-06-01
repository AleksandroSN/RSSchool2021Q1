import "./app.scss";
import "./assets/icons/question.svg";
import "./assets/icons/settings.svg";
import "./assets/icons/star.svg";
import "./assets/icons/select-arrow.svg";
import "./assets/icons/correct.svg";
import "./assets/icons/wrong.svg";
import "./assets/img/cards-example.jpg";
import "./assets/img/game-settings.jpg";
import "./assets/img/register-form.jpg";
import "./assets/img/avatar.png";
import "./assets/img/avatar-login.jpg";
import "./assets/img/player1.jpg";
import "./assets/img/shirt.jpg";
import { Render } from "./ts/render/render";
import { GameSettings } from "./ts/pages/gameSettings";
import { Game } from "./ts/pages/game";
import { ImageCategory } from "./ts/api/api";
import { IndexedDB } from "./ts/database/indexedDB";
import { Router } from "./ts/router/router";
import { routing } from "./ts/shared/routes";
import { Header } from "./ts/layout/header";

const database = IndexedDB.getInstance();
database.openDB();
setTimeout(() => {
  database.getAllRecords("user", "rating");
}, 500);

const header = Header.getInstance();
const gamePage = Game.getInstance();
const gameSettingsPage = GameSettings.getInstance();

async function start(index: number) {
  const res = await fetch("./images.json");
  const categories: ImageCategory[] = await res.json();
  const cat = categories[index];
  const images = cat.images.map((name: string) => `${cat.category}/${name}`);
  gamePage.newGame(
    images,
    (gameSettingsPage.difficultGameValue as number) || 16
  );
}

const render = Render.getInstance();
render.render();

const router = Router.getInstance();
router.addRoute(routing);

window.onload = (): void => {
  router.onloadRoute();
};

window.onhashchange = (): void => {
  router.navigate();
};

header.btnReg.element.addEventListener("click", () => {
  if (header.btnReg.element.textContent === "Start Game") {
    window.location.hash = "game";
    gameSettingsPage.clearSelects();
    start((gameSettingsPage.cardShirtValue as number) - 1 || 0);
    setTimeout(() => {
      header.btnReg.element.textContent = "Stop Game";
    }, 100);
  }

  if (header.btnReg.element.textContent === "Stop Game") {
    gameSettingsPage.cardShirtValue = undefined;
    gameSettingsPage.difficultGameValue = undefined;
    router.onloadRoute();
    header.btnReg.element.textContent = "Start Game";
  }
});
