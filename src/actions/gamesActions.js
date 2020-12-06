import axios from "axios";
import { popularGamesURL } from "../api";

export const FETCH_POPULAR_GAMES = "FETCH_POPULAR_GAMES";

export const loadPopularGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  dispatch({
    type: FETCH_POPULAR_GAMES,
    payload: {
      popular: popularData.data.results,
    },
  });
};
