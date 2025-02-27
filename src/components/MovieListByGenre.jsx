import { useState, useEffect } from "react";
import { getMoviesByGenre } from "../api/tmdb";
import MovieCard from "./MovieCard";

const MovieListByGenre = ({ genreId, genreName }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMoviesByGenre(genreId);
      if (data) setMovies(data.results);
    };

    fetchMovies();
  }, [genreId]);

  return (
    <div className="genre-section">
      <h2>{genreName}</h2>
      <div className="movie-list">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieListByGenre;
