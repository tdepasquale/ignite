import {
  FETCH_ALL_GAMES,
  FETCH_SEARCHED,
  CLEAR_SEARCHED,
} from "../actions/gamesActions";

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
    case FETCH_SEARCHED:
      return { ...state, searched: [...action.payload.searched] };
    case CLEAR_SEARCHED:
      return { ...state, searched: [] };
    default:
      return { ...state };
  }
};
