import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieList from "../componentes/MovieList";
import MovieCard from "../componentes/MovieCard";
import { movieService } from "../services/movieService";
import styles from "../styles/CategoryPage.module.css";
import type { Movie } from "../App";

type CategoryPageProps = {
  favoritas: Movie[];
  agregarFavorito: (movie: Movie) => void;
  quitarFavorito: (movie: Movie) => void;
};

function CategoryPage({
  favoritas,
  agregarFavorito,
  quitarFavorito,
}: CategoryPageProps) {
  const { categoria } = useParams<{ categoria: string }>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [peliculasFiltradas, setPeliculasFiltradas] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categoria) {
      navigate("/");
      return;
    }

    const categoriaLower = categoria.toLowerCase();

    setLoading(true);
    setError(null);

    movieService
      .getAllMovies()
      .then((movies) => {
        const generoExiste = movies.some((m) =>
          m.genre.map((g) => g.toLowerCase()).includes(categoriaLower)
        );
        if (!generoExiste) {
          navigate("/404");
          return;
        }

        const filtradas = movies.filter((movie) =>
          movie.genre.map((g) => g.toLowerCase()).includes(categoriaLower)
        );
        setPeliculasFiltradas(filtradas);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar las películas");
        setLoading(false);
      });
  }, [categoria, navigate]);

  if (loading) {
    return (
      <div className={styles.container}>
        <h2 className={styles.titulo} style={{ textAlign: "center" }}>
          Cargando películas de {categoria}...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h2 className={styles.titulo} style={{ textAlign: "center", color: "red" }}>
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo} style={{ textAlign: "center" }}>
        Películas de {categoria}
      </h2>
      {peliculasFiltradas.length > 0 ? (
        <MovieList title="" description="">
          {peliculasFiltradas.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddToFavorites={agregarFavorito}
              onRemoveFromFavorites={quitarFavorito}
              isFavorite={favoritas.some((fav) => fav.id === movie.id)}
            />
          ))}
        </MovieList>
      ) : (
        <p className={styles.mensaje}>
          No se encontraron películas en esta categoría
        </p>
      )}
    </div>
  );
}

export default CategoryPage;
