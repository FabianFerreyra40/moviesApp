import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import styles from "../styles/Favorites.module.css";
import type { Movie } from "../App";

type FavoritesProps = {
  favoritas: Movie[];
  quitarDeFavoritos: (movie: Movie) => void;
  borrarTodasFavoritas: () => void;
};

function Favorites({ favoritas, quitarDeFavoritos, borrarTodasFavoritas }: FavoritesProps) {
  const hayFavoritas = favoritas.length > 0;

  return (
    <>
      <Navbar showSearch={false} />

      <div className={styles.container}>
        <h2 className={styles.titulo}>⭐ Tus Favoritas</h2>

        {hayFavoritas && (
          <div style={{ textAlign: "center" }}>
            <button
              onClick={borrarTodasFavoritas}
              className={styles.botonBorrarTodas}
              aria-label="Borrar todas las favoritas"
            >
              Borrar todas las favoritas
            </button>
          </div>
        )}

        {hayFavoritas ? (
          <MovieList title="" description="">
            {favoritas.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onRemoveFromFavorites={quitarDeFavoritos}
                isFavorite
              />
            ))}
          </MovieList>
        ) : (
          <p className={styles.mensaje}>Todavía no agregaste ninguna película a favoritos.</p>
        )}
      </div>
    </>
  );
}

export default Favorites;

