const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchFromTMDB = async (endpoint, params = {}) => {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  url.searchParams.append("api_key", API_KEY);

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erreur lors de la récupération des données");
    return await response.json();
  } catch (error) {
    console.error("Erreur de l'API TMDB:", error);
    return null;
  }
};


export const getTrendingMovies = async () => {
    return await fetchFromTMDB("trending/movie/week");
};

export const getGenres = async () => {
  return await fetchFromTMDB("genre/movie/list");
};

export const getMoviesByGenre = async (genreId) => {
  return await fetchFromTMDB("discover/movie", { with_genres: genreId });
};

export const getMovieDetails = async (movieId) => {
    return await fetchFromTMDB(`movie/${movieId}`, { append_to_response: "credits" });
};
  
export default fetchFromTMDB;
