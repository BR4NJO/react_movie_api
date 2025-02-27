import { useState, useEffect } from "react";
import { getGenres } from "../api/tmdb";
import MovieListByGenre from "../components/MovieListByGenre";
import TrendingMovies from "../components/TrendingMovies";

const HomePage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();
      if (data) setGenres(data.genres); 
    };

    fetchGenres();
  }, []);

  

  return (
    <div className="homepage">
      <TrendingMovies /> 

      {genres.map((genre) => (
        <MovieListByGenre key={genre.id} genreId={genre.id} genreName={genre.name} />
      ))}
    </div>
  );
};

export default HomePage;
