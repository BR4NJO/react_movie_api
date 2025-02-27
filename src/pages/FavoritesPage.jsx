import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="favorites-page">
      <h2>Mes Films Favoris</h2>
      {favorites.length === 0 ? (
        <p>Aucun film favori pour le moment.</p>
      ) : (
        <div className="movie-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
