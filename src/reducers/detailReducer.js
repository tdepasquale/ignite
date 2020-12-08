import { FETCH_GAME_DETAILS, LOADING_DETAILS } from "../actions/detailAction";

const initialState = {
  game: {},
  screenshots: {},
  isLoading: true,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_DETAILS:
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    case LOADING_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};
