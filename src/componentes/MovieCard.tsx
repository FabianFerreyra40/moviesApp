import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/MovieCard.module.css";
import type { Movie } from "../types";

type MovieCardProps = {
  movie: Movie;
  onAddToFavorites?: (movie: Movie) => void;
  onRemoveFromFavorites?: (movie: Movie) => void;
  onDelete?: (id: number) => void;
  isFavorite?: boolean;
};

function MovieCard({
  movie,
  onAddToFavorites,
  onRemoveFromFavorites,
  onDelete,
  isFavorite = false,
}: MovieCardProps) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const handleCardClick = () => navigate(`/pelicula/${movie.id}`);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    action?: (movie: Movie) => void
  ) => {
    e.stopPropagation();
    action?.(movie);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onDelete) onDelete(movie.id);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`/editar/${movie.id}`);
  };

  return (
    <div className={styles.container} onClick={handleCardClick}>
      <img
        className={styles.image}
        src={!imgError && movie.poster ? movie.poster : "/no-image.jpeg"}
        alt={movie.title ? `${movie.title} poster` : "Poster no disponible"}
        onError={() => setImgError(true)}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.category}>{movie.genre.join(", ")}</p>
        <p className={styles.duration}>{movie.runtime} min</p>
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

        {onDelete && (
          <button className={styles.deleteButton} onClick={handleDelete}>
            Eliminar
          </button>
        )}
          <button className={styles.editButton} onClick={handleEdit}>
          Editar
          </button>
      </div>
    </div>
  );
}

export default MovieCard;
