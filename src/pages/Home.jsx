import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllGames } from "../actions/gamesActions";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Game } from "../components/Game";
import { GameDetail } from "../components/GameDetail";
import { useParams } from "react-router-dom";

export const Home = () => {
  let { id } = useParams();

  useEffect(() => {
    if (id) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [id]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllGames());
  }, [dispatch]);

  const games = useSelector((state) => state.games);

  return (
    <StyledGameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{id && <GameDetail id={id} />}</AnimatePresence>

        <h2>Upcoming Games</h2>
        <StyledGames>
          {games.upcoming.map((game) => {
            return (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            );
          })}
        </StyledGames>

        <h2>Popular Games</h2>
        <StyledGames>
          {games.popular.map((game) => {
            return (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            );
          })}
        </StyledGames>

        <h2>New Games</h2>
        <StyledGames>
          {games.new.map((game) => {
            return (
              <Game
                key={game.id}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            );
          })}
        </StyledGames>
      </AnimateSharedLayout>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0 5rem 5rem;
  h2 {
    padding: 5rem 0;
  }
  @media only screen and (max-width: 800px) {
    padding: 0 0 5rem;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
