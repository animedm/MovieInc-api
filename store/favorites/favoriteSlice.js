import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
    isLoading: false,
  },
  reducers: {
    setFavorite: (state, { payload }) => {
      state.favorites = [...payload];
      state.isLoading = false;
    },
    startLoadingFavorite: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setFavorite, startLoadingFavorite } = favoriteSlice.actions;
