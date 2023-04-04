import React from "react";
import PropTypes from "prop-types";
import WordToGuess from "./WordToGuess";

export default function GameBoard(props) {

  function handleLetterGuess(event) {
    event.preventDefault();
    console.log(event.target.letterGuess.value);
    props.onLetterGuessCreation({
      letterToGuess: event.target.letterGuess.value
    });
  }

  const { wordToGuess, letterToGuess } = props;
  // props => {wordToGuess, letterToGuess, ...}
  // wordToGuess
  // letterToGuess = letterToGuess.value()
  // props.wordToGuess
  return (
    <> 
      <h1>Hang Person</h1>
      <WordToGuess wordToGuess={wordToGuess}/>
      <h3>Word to guess: {wordToGuess}</h3>
      <form onSubmit={handleLetterGuess}>
        <input
          type="text"
          name="letterGuess"
          placeholder="Enter Letter" />
        <button type="submit">Enter Guess!</button>
      </form>
      <p>Letters guessed: {letterToGuess}</p>
    </>
  );
}

GameBoard.propTypes = {
  wordToGuess: PropTypes.string,
  letterToGuess: PropTypes.string,
  onLetterGuessCreation: PropTypes.func
};

