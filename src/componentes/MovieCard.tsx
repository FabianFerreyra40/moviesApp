import { useNavigate } from "react-router-dom";
import styles from "../styles/MovieCard.module.css";
import type { Movie } from "../data/movies";

type MovieCardProps = {
  movie: Movie;
  onAddToFavorites?: (movie: Movie) => void;
  onRemoveFromFavorites?: (movie: Movie) => void;
  isFavorite?: boolean;
};

function MovieCard({
  movie,
  onAddToFavorites,
  onRemoveFromFavorites,
  isFavorite = false,
}: MovieCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => navigate(`/pelicula/${movie.id}`);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    action?: (movie: Movie) => void
  ) => {
    e.stopPropagation();
    action?.(movie);
  };

  return (
    <div className={styles.container} onClick={handleCardClick}>
      <img className={styles.image} src={movie.image} alt={movie.title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.category}>{movie.category}</p>
        <p className={styles.duration}>{movie.duration} min</p>
        <p className={styles.year}>{movie.year}</p>

        {!isFavorite && onAddToFavorites && (
          <button
            className={styles.favButton}
            onClick={(e) => handleClick(e, onAddToFavorites)}
          >
            Añadir a Favoritos
          </button>
        )}

        {isFavorite && onRemoveFromFavorites && (
          <button
            className={styles.removeFavButton}
            onClick={(e) => handleClick(e, onRemoveFromFavorites)}
          >
            Quitar de Favoritos
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;


