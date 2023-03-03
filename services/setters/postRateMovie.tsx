import { endpoints, enviroment } from "../../constants";

export const postRateMovie = async (id: number, rate: number) => {

  const url = `${enviroment.API_BASE_URL}${endpoints.rateMovie(id)}${enviroment.API_KEY}${enviroment.SESSION_ID}${enviroment.LANGUAGE}`;
  
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    value: rate,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  await fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => error);
};
