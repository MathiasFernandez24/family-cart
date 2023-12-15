import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/exampleCounterSlice";
import settingsReducer from "./slices/settingsSlice";

export type reducerTypes = { counterStore: any; settingsStore: any };

const reducers: reducerTypes = {
  counterStore: counterReducer,
  settingsStore: settingsReducer,
};

export const store = configureStore({
  reducer: reducers,
});
