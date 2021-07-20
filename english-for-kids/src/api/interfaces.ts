interface BaseInterface {
  [key: string]: any;
}

export interface baseDataCard extends BaseInterface {
  word: string;
  translation: string;
  imageSrc: string;
  audioSrc: string;
}

export interface FetchData extends BaseInterface {
  categoryName: string;
  imageSrc?: string;
  uniqueKey?: string;
  cards?: baseDataCard[] | Card[];
}

export interface Card extends baseDataCard {
  activeSound: gameSound;
  gameArrIndex: number;
  category: string;
  isGame: boolean;
  Progress: (status: boolean) => void;
  NextAudio: (idx: number) => void;
}

export interface Word extends BaseInterface {
  word: string;
  translation: string;
  soundFileSrc: string;
  image: string;
  id: string;
  arrData: FetchData;
  reRenderPage: () => Promise<void>;
}

export interface Category {
  name: string;
  image: string;
  id: string;
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

export interface AllData {
  result: FetchData[];
  loading: string;
  getData: () => Promise<void>;
}
