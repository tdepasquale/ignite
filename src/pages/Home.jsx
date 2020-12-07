import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllGames } from "../actions/gamesActions";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Game } from "../components/Game";
import { GameDetail } from "../components/GameDetail";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllGames());
  }, [dispatch]);

  const games = useSelector((state) => state.games);

  return (
    <StyledGameList>
      <GameDetail />
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
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
