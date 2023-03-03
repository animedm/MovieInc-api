import { endpoints, enviroment } from "../../constants";
import { Cast } from "../../Interfaces/cast.interface";

export const getCast = async (id: number | undefined) => {

  const url = `${enviroment.API_BASE_URL}${endpoints.credits(id)}${enviroment.API_KEY}${enviroment.LANGUAGE}`;

  let cast: Array<Cast> | Array<null> = [];

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cast = data.cast;
    });
    
  return cast;
};
