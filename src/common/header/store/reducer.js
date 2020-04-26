import { INPUT_GET_FOCUS, INPUT_LOSE_FOCUS } from "../../../store/actionTypes";

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === INPUT_GET_FOCUS) {
    return {
      focused: true
    };
  }
  if (action.type === INPUT_LOSE_FOCUS) {
    return {
      focused: false
    };
  }
  return state;
};
