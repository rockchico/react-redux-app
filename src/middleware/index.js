import { CLICK_ADD_VALUE } from "../actions/actionTypes";
const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      console.log(action);
      if (action.type === CLICK_ADD_VALUE) {
        const foundWord = forbiddenWords.filter(word =>
          action.newValue.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD", id: action.id + 1 });
        }
      }
      return next(action);
    };
  };
}