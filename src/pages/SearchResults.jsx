import { useState, useEffect } from 'react';
import fetchFromTMDB from '../api/tmdb'; 
import MovieCard from '../components/MovieCard';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query'); 

  useEffect(() => {
    const fetchSearchResults = async () => {
      const data = await fetchFromTMDB('search/movie', { query });
      if (data) {
        setMovies(data.results);
      }
    };

    fetchSearchResults();
  }, [query]); 

  return (
    <div>
      <h1>Résultats de recherche pour: {query}</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
