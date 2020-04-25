import { INPUT_GET_FOCUS, INPUT_LOSE_FOCUS } from "./actionTypes";

export const getInputFocusAction = () => ({
  type: INPUT_GET_FOCUS
});

export const loseInputFocusAction = () => ({
  type: INPUT_LOSE_FOCUS
});
