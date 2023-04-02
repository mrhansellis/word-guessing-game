import React from "react";
import PropTypes from "prop-types";

export default function WordToGuessForm(props) {

  function handleWordToGuessFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.wordToGuess.value);
    props.onNewWordCreation({
      wordToGuess: event.target.wordToGuess.value
    });
  }

  return (
    <>
      <form onSubmit={handleWordToGuessFormSubmission}>
        <input
          type="text"
          name="wordToGuess"
          placeholder="Enter Word to Guess" />
        <button type="submit">Begin!</button>
      </form>
    </>
  );
}

WordToGuessForm.propTypes = {
  onNewWordCreation: PropTypes.func
};