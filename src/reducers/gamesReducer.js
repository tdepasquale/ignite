import { FETCH_POPULAR_GAMES } from "../actions/gamesActions";

const initialState = {
  popular: [],
  new: [],
  upcoming: [],
  searched: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_GAMES:
      return { ...state, popular: action.payload.popular };

    default:
      return { ...state };
  }
};
