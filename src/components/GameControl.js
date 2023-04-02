import { connect } from 'react-redux';
import React from 'react';
import WordToGuessForm from './WordToGuessForm';
import SplashPage from './SplashPage';
import LetterGuessForm from './LetterGuessForm';
import PropTypes from "prop-types";

class GameControl extends React.Component {
  
  constructor(props) {
    super(props); 
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
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
    this.setState({formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.formVisibleOnPage) {
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

    </ React.Fragment>
    )
  }
}

GameControl.propTypes = {
  wordToGuess: PropTypes.string
};

const mapStateToProps = state => {
  return {
    wordToGuess: state.wordToGuess
  }
}

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;