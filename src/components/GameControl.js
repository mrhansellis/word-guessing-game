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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <WordToGuessForm />
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

// const mapStateToProps = state => {
//   return {
//     /* xxxxxxxx: state */
//   }
// }

// GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;