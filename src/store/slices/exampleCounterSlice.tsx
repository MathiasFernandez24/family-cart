import { createSlice } from "@reduxjs/toolkit";
import { reducerTypes } from "..";

type initialStateType = {
  counter: number;
};
const initialState: initialStateType = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counterSilce",
  initialState,
  reducers: {
    addCounter: (state) => {
      state.counter = state.counter + 1;
    },
    resetCounter: (state) => {
      state.counter = 0;
    },
    setCounter: (state, { payload }) => {
      state.counter = payload;
    },
  },
});
export const selectCounter = (state: reducerTypes) =>
  state.counterStore.counter;

export const { addCounter, resetCounter, setCounter } = counterSlice.actions;

export default counterSlice.reducer;
