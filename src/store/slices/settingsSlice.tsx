import { createSlice } from "@reduxjs/toolkit";
import { reducerTypes } from "..";
import { enabledLanguages } from "../../i18n";

const initialState = {
  language: enabledLanguages.english.value,
};

export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
});
export const getLanguage = (state: reducerTypes) =>
  state.settingsStore.language;

export const { setLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
