export const navListTemplate = `
<li class="header__nav-list-item" data-link="about">
          <a href="#about" class="header__nav-link">
            <picture class="header__nav-list-item-img"><img src="./assets/icons/question.svg" alt="about game">
            </picture>About Game
          </a>
        </li>
        <li class="header__nav-list-item" data-link="best-score">
          <a href="#best-score" class="header__nav-link">
            <picture class="header__nav-list-item-img header__nav-list-item-img--score"><img src="./assets/icons/star.svg" alt="best score"></picture>Best
            Score
          </a>
        </li>
        <li class="header__nav-list-item" data-link="game-settings">
          <a href="#game-settings" class="header__nav-link">
            <picture class="header__nav-list-item-img"><img src="./assets/icons/settings.svg" alt="game Settings">
            </picture>
            Game Settings
          </a>
        </li>`;

export const aboutGameMarkUp = `
<h2 class="about__game-title">How to play?</h2>
      <div class="about__game-grid">
        <div class="about__game-register--left">
          <span class="about__game-number">1</span>
          <p class="about__game-text">Register new player in game</p>
        </div>
        <div class="about__game-register--right">
          <picture class="about__game-picture">
            <img src="./assets/img/register-form.jpg" alt="form example">
          </picture>
        </div>
        <div class="about__game-settings--left">
          <span class="about__game-number">2</span>
          <p class="about__game-text">Configure your game settings</p>
        </div>
        <div class="about__game-settings--right">
          <picture class="about__game-picture">
            <img src="./assets/img/game-settings.jpg" alt="form example">
          </picture>
        </div>
        <div class="about__game-start--left">
          <span class="about__game-number">3</span>
          <p class="about__game-text">Start you new game! Remember card positions and match it before times up.</p>
        </div>
        <div class="about__game-start--right">
          <picture class="about__game-picture">
            <img src="./assets/img/cards-example.jpg" alt="form example">
          </picture>
        </div>
      </div>`;

export const gameSelectors = `<div class="game__settings-wrapper">
<label for="game-cards" class="game__settings-title">Game Cards</label>
<select name="game-cards" id="game-cards-select" class="game__settings-select-cards">
  <option value="" disabled selected>Select game cards type</option>
  <option value="0">kitty</option>
  <option value="1">sport</option>
  <option value="2">computer</option>
</select>
</div>
<div class="game__settings-wrapper">
<label for="game-difficult" class="game__settings-title">Difficulty</label>
<select name="game-difficult" id="game-difficult-select" class="game__settings-select-difficult">
  <option value="" disabled selected>Select field size</option>
  <option value="4">2 x 2</option>
  <option value="16">4 x 4</option>
  <option value="36">6 x 6</option>
</select>
</div>`;

export const addCongratText = (
  min: number,
  sec: number,
  result: number
): string => {
  return `
  <p class="game__congrats-text">Congratulations! You successfully found all matches on <span
  class="game__congrats-timer">${min} minutes ${sec} seconds </span>.</p> Your score ${result}`;
};
