import { setFavorite, startLoadingFavorite } from "./favoriteSlice";

export const addFavorite = (favorites) => {
  return async (dispatch) => {
    dispatch(startLoadingFavorite());
    dispatch(setFavorite(favorites));
  };
};
