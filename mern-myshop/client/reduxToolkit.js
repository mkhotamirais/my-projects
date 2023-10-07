import { configureStore, createReducer } from "@reduxjs/toolkit";

const cartReducer = createReducer([], (builder) => {
  builder.addCase("ADD", (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch({ type: "ADD", payload: { id: 10, qty: 5 } });
