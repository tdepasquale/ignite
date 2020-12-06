import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

export const FETCH_ALL_GAMES = "FETCH_POPULAR_GAMES";

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
