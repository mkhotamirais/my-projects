import { legacy_createStore } from "redux";

// reducer
const initialValue = { cart: [{ id: 1, qty: 20 }] };
const myReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD":
      return {
        // ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const myStore = legacy_createStore(myReducer);
console.log(myStore.getState());

// subscribe
myStore.subscribe(() => console.log(myStore.getState()));

// dispatch
myStore.dispatch({ type: "ADD", payload: { id: 2, qty: 1 } });
myStore.dispatch({ type: "ADD", payload: { id: 2, qty: 1 } });
