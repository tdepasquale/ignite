import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadGameDetails } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { getResizedImage } from "../imageUtil";

export const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadGameDetails(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={getResizedImage(image, 640)} alt={name} loading="lazy" />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    height: 40vh;
    object-fit: cover;
  }
`;
