export const endpoints = {
  trending: "trending/all/day?",
  rateMovie: (id: number) => `movie/${id}/rating?`,
  credits: (id: number | undefined) => `movie/${id}/credits?`,
  recommendMovie: (id: number) => `movie/${id}/recommendations?`,
  genres: "genre/movie/list?",
  image: "https://image.tmdb.org/t/p/original/",
  recommendImage: `https://image.tmdb.org/t/p/w300/`,
};
