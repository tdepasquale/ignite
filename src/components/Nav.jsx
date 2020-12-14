import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearched } from "../actions/gamesActions";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

export const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearched(textInput));
    setTextInput("");
  };

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo>
        <img src={logo} alt="Logo" />
        <h1>Ignite</h1>
      </StyledLogo>
      <form onSubmit={submitHandler} className="search">
        <input onChange={inputHandler} value={textInput} type="text" />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  img {
    height: 2rem;
    width: 2rem;
  }
`;
