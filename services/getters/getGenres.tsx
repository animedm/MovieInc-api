import { endpoints, enviroment } from "../../constants";
import { Genre } from "../../Interfaces/genres.interface";

export const getGenres = async () => {

  const url = `${enviroment.API_BASE_URL}${endpoints.genres}${enviroment.API_KEY}${enviroment.LANGUAGE}`;

  let genres: Array<Genre> | Array<null> = [];

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      genres = data.genres;
    });

  return genres;
  
};
