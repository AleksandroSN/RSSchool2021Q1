export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface IBodyCar {
  name: string;
  color: string;
}

export interface Result {
  carArray: ICar[];
  countCars: string | null;
}

export interface Engine {
  velocity: number;
  distance: number;
}

export interface IDrive {
  success: boolean;
}

export interface IRace {
  success: boolean;
  time: number;
  id: number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IBodyWinner {
  wins: number;
  time: number;
}

export interface ResultsWinners {
  winnersArray: IWinner[];
  countWinners: string | null;
}

export interface fullInfWinners {
  color: string;
  carName: string;
  wins: number;
  time: number;
}

export interface tableWinners {
  id: number;
  color: string;
  name: string;
  wins: number;
  time: number;
}

export type animationState = number;
