import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from "../api";

export const FETCH_ALL_GAMES = "FETCH_POPULAR_GAMES";
export const FETCH_SEARCHED = "FETCH_SEARCHED";
export const CLEAR_SEARCHED = "CLEAR_SEARCHED";

export const loadAllGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: FETCH_ALL_GAMES,
    payload: {
      popular: popularData.data.results,
      new: newData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearched = (game_name) => async (dispatch) => {
  const searchedData = await axios.get(searchGameURL(game_name));
  dispatch({
    type: FETCH_SEARCHED,
    payload: {
      searched: searchedData.data.results,
    },
  });
};

export const clearSearched = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SEARCHED,
  });
};
