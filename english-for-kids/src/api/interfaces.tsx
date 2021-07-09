interface BaseInterface {
  [key: string]: any;
}

export interface Card extends BaseInterface {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  activeSound: gameSound;
  gameArrIndex: number;
  category: string;
  isGame: boolean;
  Progress: (status: boolean) => void;
  NextAudio: (idx: number) => void;
}

export interface Category {
  name: string;
  image: string;
  id: string;
}

export interface Data extends BaseInterface {
  cards: Card[];
  category: Category;
}

export interface gameSound {
  audio: HTMLAudioElement;
  word: string;
}

export interface WordsStatistics extends BaseInterface {
  key?: number;
  category: string;
  word: string;
  translation: string;
  clicksTrainMode?: number;
  succesGameMode?: number;
  wrongGameMode?: number;
  percentCorrects?: number;
}

export interface WordsWithStatistics {
  category: string;
  words: Card[];
  sortedWords: string | null;
  sortConfig: string;
}

export interface GameOverState {
  endGame: boolean;
}

export interface ButtonsFunc {
  clearStorage: () => void;
}
