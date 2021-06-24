export interface ParamCar {
  name: string;
  color: string;
  id: number;
}

export interface BodyCar {
  name: string;
  color: string;
}

export interface Winner {
  id: number;
  wins: number;
  time: number;
}

export interface BodyWinner {
  wins: number;
  time: number;
}

export interface baseFetchResult {
  resultArray: ParamCar[] | Winner[];
  count: string;
}

export interface Engine {
  velocity: number;
  distance: number;
}

export interface Drive {
  success: boolean;
}

export interface RaceResult {
  success: boolean;
  time: number;
  id: number;
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
