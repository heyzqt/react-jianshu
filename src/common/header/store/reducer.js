import * as constants from "./constants";

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === constants.INPUT_GET_FOCUS) {
    return {
      focused: true
    };
  }
  if (action.type === constants.INPUT_LOSE_FOCUS) {
    return {
      focused: false
    };
  }
  return state;
};
