import { Card, gameSound } from "../../api/interfaces";

interface GameState {
  isGame: boolean;
  gameArr: Card[];
  gameArrIndex: number;
  activeSound: gameSound | null;
  endGame: boolean | undefined;
  errors: number;
  progressArr: boolean[];
}

interface ActionTypes {
  type: string;
  payload: unknown;
}

export const GAME_ACTIONS = {
  SET_START_GAME: "setStartGame",
  SET_GAME_MODE: "setGameMode",
  SET_NEXT_AUDIO: "setNextAudio",
  SET_ENDGAME: "setEndGame",
  SET_PROGRESS_ARR_CORRECT: "setProgressArrCorrect",
  SET_PROGRESS_ARR_UNCORRECT: "setProgressArrUncorrect",
  SET_COUNT_ERRORS: "setCountErrors",
};

export const initialGameState: GameState = {
  isGame: false,
  gameArr: [],
  gameArrIndex: 0,
  activeSound: null,
  endGame: undefined,
  errors: 0,
  progressArr: [],
};

export const gamePageReducer = (state: GameState, action: ActionTypes): GameState => {
  switch (action.type) {
    case GAME_ACTIONS.SET_START_GAME:
      return {
        ...state,
        ...{
          isGame: false,
          activeSound: null,
          gameArr: (action.payload as GameState).gameArr,
          gameArrIndex: 0,
          endGame: undefined,
          errors: 0,
          progressArr: [],
        },
      };
    case GAME_ACTIONS.SET_GAME_MODE:
      return { ...state, ...{ isGame: (action.payload as GameState).isGame } };
    case GAME_ACTIONS.SET_NEXT_AUDIO:
      return {
        ...state,
        ...{
          activeSound: (action.payload as GameState).activeSound,
          gameArrIndex: (action.payload as GameState).gameArrIndex,
        },
      };
    case GAME_ACTIONS.SET_ENDGAME:
      return { ...state, ...{ endGame: (action.payload as GameState).endGame } };
    case GAME_ACTIONS.SET_PROGRESS_ARR_CORRECT:
      return { ...state, ...{ progressArr: (action.payload as GameState).progressArr } };
    case GAME_ACTIONS.SET_PROGRESS_ARR_UNCORRECT:
      return {
        ...state,
        ...{
          progressArr: (action.payload as GameState).progressArr,
          errors: (action.payload as GameState).errors,
        },
      };
    default:
      return state;
  }
};
