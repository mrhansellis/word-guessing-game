const reducer = (state = {}, action) => {
  const { wordToGuess, letterToGuess } = action;
    switch (action.type) {
      case 'ADD_WORD':
        return Object.assign({}, state, {
          wordToGuess: wordToGuess
        });
      case 'ADD_LETTER':
        return Object.assign({}, state, {
          letterToGuess: letterToGuess
        });
    default:
      return state;
  }
};

export default reducer;