import { endpoints, enviroment } from "../../constants";
import {Movie} from "../../Interfaces/movie.interface";

export const getMovies = async () => {
  const url = `${enviroment.API_BASE_URL}${endpoints.trending}${enviroment.API_KEY}${enviroment.LANGUAGE}`;

  let movies: Array<Movie> | Array<null> = [];

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      movies = data.results;
    });
    
  return movies;
};
