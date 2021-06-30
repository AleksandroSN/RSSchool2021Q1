export interface Card {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  // gameMode: string;
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
