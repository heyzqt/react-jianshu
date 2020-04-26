import * as actionTypes from "./constants";

export const getInputFocusAction = () => ({
  type: actionTypes.INPUT_GET_FOCUS
});

export const loseInputFocusAction = () => ({
  type: actionTypes.INPUT_LOSE_FOCUS
});
