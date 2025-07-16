import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieList from "../componentes/MovieList";
import MovieCard from "../componentes/MovieCard";
import { movies } from "../data/movies";
import styles from "../styles/CategoryPage.module.css";
import type { Movie } from "../App";

type CategoryPageProps = {
  favoritos: Movie[];
  agregarFavorito: (movie: Movie) => void;
  quitarFavorito: (movie: Movie) => void;
};

const categoriasValidas = ["acción", "ciencia ficción", "drama", "crimen"];

function CategoryPage({ favoritos, agregarFavorito, quitarFavorito }: CategoryPageProps) {
  const { categoria } = useParams<{ categoria: string }>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [peliculasFiltradas, setPeliculasFiltradas] = useState<Movie[]>([]);

  useEffect(() => {
    if (!categoria) {
      navigate("/"); 
      return;
    }
    const categoriaLower = categoria.toLowerCase();

    
    if (!categoriasValidas.includes(categoriaLower)) {
      navigate("/404");
      return;
    }

    setLoading(true);
    const timeoutId = setTimeout(() => {
      const filtradas = movies.filter(
        (movie) => movie.category.toLowerCase() === categoriaLower
      );
      setPeliculasFiltradas(filtradas);
      setLoading(false);
    }, 800); 

    return () => clearTimeout(timeoutId);
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
              isFavorite={favoritos.some((fav) => fav.id === movie.id)}
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

