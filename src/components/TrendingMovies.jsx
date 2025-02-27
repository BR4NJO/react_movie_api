import { useState, useEffect } from "react";
import { getTrendingMovies } from "../api/tmdb";
import MovieCard from "./MovieCard";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendingMovies();
      if (data) setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="trending-section">
      <h2>Films du Moment</h2>
      <div className="movie-list">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
