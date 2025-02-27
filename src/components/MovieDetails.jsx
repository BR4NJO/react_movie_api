import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du film:", error);
      }
    };

    const fetchActors = async () => {
      try {
        const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=fr-FR`);
        const data = await res.json();
        setActors(data.cast.slice(0, 6)); 
      } catch (error) {
        console.error("Erreur lors de la récupération des acteurs:", error);
      }
    };

    fetchMovieDetails();
    fetchActors();
  }, [id]);


  return (
    <div className="movie-details">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p><strong>Date de sortie:</strong> {movie.release_date}</p>
      <p><strong>Note moyenne:</strong> {movie.vote_average} / 10</p>
      <p><strong>Synopsis:</strong> {movie.overview}</p>

      <h3>Acteurs principaux</h3>
      <div className="actors">
        {actors.map((actor) => (
          <div key={actor.id} className="actor-card">
            <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
            <p className="character">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
