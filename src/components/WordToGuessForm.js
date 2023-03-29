import React from "react";
import PropTypes from "prop-types";

export default function WordToGuessForm() {

  function handleWordToGuessFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.wordtoguess.value);
  }

  return (
    <>
      <form onSubmit={handleWordToGuessFormSubmission}>
        <input
          type="text"
          name="wordtoguess"
          placeholder="Enter Word to Guess" />
        <button type="submit">Begin!</button>
      </form>
    </>
  )
}