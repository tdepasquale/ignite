import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const FETCH_GAME_DETAILS = "FETCH_GAME_DETAILS";

export const loadGameDetails = (game_id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(game_id));
  const screenshotsData = await axios.get(gameScreenshotsURL(game_id));

  dispatch({
    type: FETCH_GAME_DETAILS,
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data,
    },
  });
};
