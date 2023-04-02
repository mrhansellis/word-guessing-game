const reducer = (state = {}, action) => {
  const { wordToGuess } = action;
    switch (action.type) {
      case 'ADD_WORD':
        return Object.assign({}, state, {
          wordToGuess: wordToGuess
        });
    default:
      return state;
  }
};

export default reducer;