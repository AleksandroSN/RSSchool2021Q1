export interface ImageCategory {
  category: string;
  images: string[];
}

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  image: string | ArrayBuffer | null;
  score: number;
}
