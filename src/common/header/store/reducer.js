import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn: false,
  page: 1, //热门搜索页数
  totalPage: 1 //热门搜索总页数
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INPUT_GET_FOCUS:
      return state.set("focused", true);
    case constants.INPUT_LOSE_FOCUS:
      return state.set("focused", false);
    case constants.CHANGE_LIST:
      console.log(action);
      return state.set("list", action.data).set("totalPage", action.totalPage);
    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
