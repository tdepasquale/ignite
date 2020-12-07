import { FETCH_GAME_DETAILS } from "../actions/detailAction";

const initialState = {
  game: {},
  screenshots: {},
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_DETAILS:
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      };
    default:
      return { ...state };
  }
};
