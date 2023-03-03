import { configureStore } from "@reduxjs/toolkit";

import { favoriteSlice } from "./favorites/favoriteSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
  },
});
