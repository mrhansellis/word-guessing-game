import { connect } from 'react-redux';
import React from 'react';
import WordToGuessForm from './WordToGuessForm';
import SplashPage from './SplashPage';
//import LetterGuessForm from './LetterGuessForm';
import GameBoard from './GameBoard';
//import WordToGuess from './WordToGuess';
import PropTypes from "prop-types";

class GameControl extends React.Component {
  
  constructor(props) {
    super(props); 
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      gameVisibleOnPage: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  viewGame = () => {
    this.setState(prevState => ({
      gameVisibleOnPage: !prevState.gameVisibleOnPage
    }));
  }

  handleAddingWordToGame = (newWord) => {
    const { dispatch } = this.props;
    const { wordToGuess } = newWord;
    const action = {
        type: 'ADD_WORD',
        wordToGuess: wordToGuess
    }
    dispatch(action);
    console.log(action);
    this.setState(
      {formVisibleOnPage: false,
      gameVisibleOnPage: true}
    );
  }

  handleAddingLetter = (newLetter) => {
    const { dispatch } = this.props;
    const { letterToGuess } = newLetter;
    const action = {
      type: 'ADD_LETTER',
      letterToGuess: letterToGuess
    }
    dispatch(action);
    console.log(action);
    this.setState({
      gameVisibleOnPage: true
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.gameVisibleOnPage) {
      currentlyVisibleState=<GameBoard
                            wordToGuess = {this.props.wordToGuess}
                            letterToGuess = {this.props.letterToGuess}
                            onLetterGuessCreation = {this.handleAddingLetter}/>
      buttonText = "Restart Game"
    } else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <WordToGuessForm 
                              onNewWordCreation = {this.handleAddingWordToGame}/>
      buttonText = "Return to Splash Page"
    } else {
      currentlyVisibleState = <SplashPage />
      buttonText = "Begin Game";
    }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      <br />
      <button onClick={this.viewGame}>FlipView</button>

    </ React.Fragment>
    )
  }
}

GameControl.propTypes = {
  wordToGuess: PropTypes.string,
  letterToGuess: PropTypes.string
};

const mapStateToProps = state => {
  return {
    wordToGuess: state.wordToGuess,
    letterToGuess: state.letterToGuess
  }
}

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;