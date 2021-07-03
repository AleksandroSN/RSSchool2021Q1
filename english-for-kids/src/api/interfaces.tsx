export interface Card {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  activeSound: gameSound;
  NextAudio: (idx: number) => void;
  gameArrIndex: number;
}

export interface Category {
  name: string;
  image: string;
  id: string;
}

export interface Data {
  category: Category;
  cards: Card[];
}

export interface gameSound {
  audio: HTMLAudioElement;
  word: string;
}
