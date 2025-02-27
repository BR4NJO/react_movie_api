import { useState, useEffect } from "react";
import { searchMovies } from "../api/tmdb";
import MovieCard from "./MovieCard";

const SearchResults = ({ query }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return; 

    const fetchMovies = async () => {
      const data = await searchMovies(query);
      if (data) setMovies(data.results);
    };

    fetchMovies();
  }, [query]);

  return (
    <div className="search-results">
      <h2>Résultats pour "{query}"</h2>
      {movies.length > 0 ? (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </div>
  );
};

export default SearchResults;
