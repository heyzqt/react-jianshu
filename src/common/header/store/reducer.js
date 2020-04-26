import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INPUT_GET_FOCUS:
      return state.set("focused", true);
    case constants.INPUT_LOSE_FOCUS:
      return state.set("focused", false);
    case constants.CHANGE_LIST:
      return state.set("list", action.data);
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    default:
      return state;
  }
};
