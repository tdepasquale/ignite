import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loadGameDetails } from "../actions/detailAction";
import { Link, useParams } from "react-router-dom";
import { getResizedImage } from "../imageUtil";

export const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const { id: openGameId } = useParams();
  const { isLoading } = useSelector((state) => state.detail);

  const loadDetailHandler = () => {
    dispatch(loadGameDetails(id));
  };

  return (
    //layoutId is required for using AnimatePresence with Framer Motion. it must match on both components.
    //isOpen fixes a bug where the card sits on top of the detail page after the transition and prevents scrolling, highlighting, etc
    <StyledGame
      layoutId={id.toString()}
      isLoading={openGameId && openGameId !== id?.toString()}
      isOpen={openGameId === id?.toString() && !isLoading}>
      <div className="loader"></div>
      <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
      <Link className="expand" to={`/game/${id}`} onClick={loadDetailHandler}>
        Expand
      </Link>
      {/* <p>{released}</p> */}
      <motion.img
        layoutId={`image ${id}`}
        src={getResizedImage(image, 640)}
        alt={name}
        loading="lazy"
      />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    height: 40vh;
    object-fit: cover;
  }
  .expand {
    cursor: pointer;
    background-color: lightgray;
    padding: 0.5em 1em;
    display: inline-block;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  ${(props) =>
    props.isLoading &&
    css`
      .loader {
        background-color: black;
        z-index: 10;
        height: 100%;
        width: 100%;
      }
    `}
  ${(props) =>
    props.isOpen &&
    css`
      z-index: -10;
    `}
`;
