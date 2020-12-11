import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getResizedImage } from "../imageUtil";
import { loadGameDetails } from "../actions/detailAction";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

export const GameDetail = ({ id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);
  const { id: currentGameId } = useParams();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    if (Object.keys(game).length === 0)
      dispatch(loadGameDetails(currentGameId));
  }, [dispatch, game, currentGameId]);

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) history.push("/");
  };

  const galleryLoadHandler = () => {
    setIsGalleryOpen(true);
  };

  const getPlatformImage = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox S":
        return xbox;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;

      default:
        return gamepad;
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating)
        stars.push(
          <img
            src={starFull}
            className="star"
            alt="Star"
            key={i}
            title="Star"></img>
        );
      else
        stars.push(
          <img
            src={starEmpty}
            className="star"
            alt="Empty Star"
            key={i}
            title="Empty Star"></img>
        );
    }
    return stars;
  };

  if (isLoading || Object.keys(game).length === 0) return null;

  //layoutId is required for AnimatePresence with Framer Motion. it must match on both components.
  return (
    <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
      <StyledDetail layoutId={id}>
        <StyledStats>
          <div className="rating">
            <motion.h3 layoutId={`title ${id}`}>{game.name}</motion.h3>
            <StyledStarContainer>{getStars()}</StyledStarContainer>
          </div>
          <StyledInfo>
            <h3>Platforms</h3>
            <StyledPlatforms>
              {game.platforms.map((data) => {
                return (
                  <img
                    className="platform"
                    key={data.platform.id}
                    src={getPlatformImage(data.platform.name)}
                    alt={data.platform.name}
                    title={data.platform.name}
                  />
                );
              })}
            </StyledPlatforms>
          </StyledInfo>
        </StyledStats>
        <StyledMedia>
          <motion.img
            layoutId={`image ${id}`}
            src={getResizedImage(game.background_image, 1280)}
            alt={game.name}
          />
        </StyledMedia>
        <StyledDescription>
          <p>{game.description_raw}</p>
        </StyledDescription>
        <StyledButtonContainer>
          <StyledButton onClick={galleryLoadHandler}>Load Gallery</StyledButton>
        </StyledButtonContainer>
        <AnimatePresence>
          {isGalleryOpen && (
            <motion.div
              className="gallery"
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              {screenshots.results.map((screen) => (
                <img
                  key={screen.id}
                  src={getResizedImage(screen.image, 1280)}
                  alt={screen.id}
                  loading="lazy"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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
  z-index: 5;
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
  z-index: 10;
  .platform {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .star {
    height: 1rem;
    width: 1rem;
    margin-left: 0;
    margin-right: 0;
  }
  img {
    margin: 0 auto 1rem;
    width: 100%;
    .gallery {
      &:last-of-type {
        margin-bottom: 0;
      }
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
  img {
    margin: 0 auto;
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0;
`;

const StyledButtonContainer = styled.div`
  text-align: center;
`;

const StyledButton = styled(motion.button)`
  cursor: pointer;
  background-color: lightgray;
  padding: 0.5em 1em;
  display: inline-block;
  border-radius: 1rem;
  margin-bottom: 5rem;
`;

const StyledStarContainer = styled.div`
  display: flex;
`;
