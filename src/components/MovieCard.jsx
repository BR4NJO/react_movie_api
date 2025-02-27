import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img 
        src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "https://via.placeholder.com/200x300?text=Pas+d'image" }
        alt={movie.title} 
      />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
