import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === constants.INPUT_GET_FOCUS) {
    return state.set('focused', true);
  }
  if (action.type === constants.INPUT_LOSE_FOCUS) {
    return state.set('focused', false);
  }
  return state;
};
