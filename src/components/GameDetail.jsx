import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getResizedImage } from "../imageUtil";

export const GameDetail = () => {
  const history = useHistory();
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) history.push("/");
  };

  if (isLoading) return null;

  return (
    <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
      <StyledDetail>
        <StyledStats>
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <StyledInfo>
            <h3>Platforms</h3>
            <StyledPlatforms>
              {game.platforms.map((data) => {
                return <h3 key={data.platform.id}>{data.platform.name}</h3>;
              })}
            </StyledPlatforms>
          </StyledInfo>
        </StyledStats>
        <StyledMedia>
          <img
            src={getResizedImage(game.background_image, 1280)}
            alt={game.name}
          />
        </StyledMedia>
        <StyledDescription>
          <p>{game.description_raw}</p>
        </StyledDescription>
        <div className="gallery">
          {screenshots.results.map((screen) => (
            <img
              key={screen.id}
              src={getResizedImage(screen.image, 1280)}
              alt={screen.id}
            />
          ))}
        </div>
      </StyledDetail>
    </StyledCardShadow>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0;
`;