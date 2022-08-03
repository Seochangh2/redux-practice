import { createStore } from "redux";

export default createStore(function name(state, action) {
  if (state === undefined) {
    return { number: 0 };
  }
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number + action.size };
  }
  return state;
});
