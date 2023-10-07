import { legacy_createStore } from "redux";

function counterReducer(state = { value: [0] }, action) {
  switch (action.type) {
    case "plus":
      return { value: [...state.value, state.value + 1] };
    case "minus":
      return { value: [...state] };
    default:
      return state;
  }
}

let store = legacy_createStore(counterReducer);
console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "plus" });
// store.dispatch({ type: "plus" });
// store.dispatch({ type: "minus" });
