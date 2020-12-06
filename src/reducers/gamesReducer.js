import { FETCH_ALL_GAMES } from "../actions/gamesActions";

const initialState = {
  popular: [],
  new: [],
  upcoming: [],
  searched: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_GAMES:
      return { ...state, ...action.payload };

    default:
      return { ...state };
  }
};
