import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("social-theme") || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    darkThemeHandler: (state) => {
      localStorage.setItem("social-theme", "dark");
      state.theme = "dark";
    },
    lightThemeHandler: (state) => {
      localStorage.setItem("social-theme", "light");
      state.theme = "light";
    },
  },
});

export const { darkThemeHandler, lightThemeHandler } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
