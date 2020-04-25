const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === "input_get_focus") {
    return {
      focused: true
    };
  }
  if (action.type === "input_lose_focus") {
    return {
      focused: false
    };
  }
  return state;
};
