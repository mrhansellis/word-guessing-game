import React from "react";
import PropTypes from "prop-types";

export default function WordToGuess(props) {
    const { wordToGuess } = props;
    const arrayFromWordToGuess = Array.from(wordToGuess);
    console.log(arrayFromWordToGuess);

    return (
      <>
        <p>{arrayFromWordToGuess}</p>
      </>
    );
  }

  WordToGuess.propTypes = {
    arrayFromWordToGuess: PropTypes.array
  };