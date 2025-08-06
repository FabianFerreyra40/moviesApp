import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useMovies } from "../hooks/useMovies";
import { movieService } from "../services/movieService";
import MovieList from "../componentes/MovieList";
import MovieCard from "../componentes/MovieCard";
import Navbar from "../componentes/Navbar";
import styles from "../styles/Home.module.css";
import type { Movie } from "../types";

type AllMoviesProps = {
  favoritas: Movie[];
  agregarFavorito: (movie: Movie) => void;
  quitarFavorito: (movie: Movie) => void;
};

const categoryDescriptions: Record<string, string> = {
  Drama: "Historias intensas y emocionales que exploran conflictos humanos profundos.",
  Crime: "Tramas centradas en el mundo del delito, la investigación o la mafia.",
  Action: "Películas llenas de adrenalina, persecuciones y desafíos físicos.",
  Romance: "Historias de amor que celebran la pasión y las emociones.",
  "Sci-Fi": "Narrativas futuristas con tecnología, viajes espaciales o realidades alternativas.",
  Thriller: "Suspenso y tensión con giros inesperados que mantienen al espectador en vilo."
};

function AllMovies({
  favoritas,
  agregarFavorito,
  quitarFavorito,
}: AllMoviesProps) {
  const queryClient = useQueryClient();
  const { data: movies = [], isLoading, isError, error } = useMovies();

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [genres, setGenres] = useState<string[]>([]);
  const [verMasPorCategoria, setVerMasPorCategoria] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const uniqueGenres = Array.from(new Set(movies.flatMap((m) => m.genre)));
    setGenres((prevGenres) => {
      const sortedPrev = [...prevGenres].sort().join(",");
      const sortedNew = [...uniqueGenres].sort().join(",");
      return sortedPrev !== sortedNew ? uniqueGenres : prevGenres;
    });
  }, [movies]);

  const eliminarPelicula = async (id: number) => {
    const confirmar = window.confirm("¿Seguro que deseas eliminar esta película?");
    if (!confirmar) return;
    try {
      await movieService.deleteMovie(id);
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    } catch (err) {
      console.error("Error al eliminar:", err);
      alert("Error al eliminar la película.");
    }
  };

  const filtrar = (cat: string) =>
    movies.filter(
      (movie) =>
        (cat === "" || movie.genre.includes(cat)) &&
        movie.title.toLowerCase().includes(titulo.toLowerCase())
    );

  const noHayResultados = filtrar("").length === 0;

  const toggleVerMas = (categoria: string) => {
    setVerMasPorCategoria((prev) => ({
      ...prev,
      [categoria]: !prev[categoria],
    }));
  };

  if (isLoading) return <p>Cargando películas...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div className={styles.container}>
      <Navbar
        showSearch
        onTituloChange={setTitulo}
        onCategoriaChange={setCategoria}
        valorTitulo={titulo}
        valorCategoria={categoria}
      />

      <div className={styles.crearContainer}>
        <Link to="/crear">
          <button className={styles.botonCrear}>Crear Película</button>
        </Link>
      </div>

      {categoria === "" ? (
        noHayResultados ? (
          <p className={styles.mensajeSinResultados}>
            No se encontraron resultados para tu búsqueda.
          </p>
        ) : (
          genres.map((gen) => {
            const pelis = filtrar(gen);
            if (!pelis.length) return null;

            const mostrarTodas = verMasPorCategoria[gen];
            const pelisMostrar = mostrarTodas ? pelis : pelis.slice(0, 6);
            const hayMas = pelis.length > 6;

            return (
              <section key={gen}>
                <MovieList
                  title={`Películas de ${gen}`}
                  description={categoryDescriptions[gen] || ""}
                >
                  {pelisMostrar.map((movie) => {
                    console.log("Rendering MovieCard:", movie.title, "con id:", movie.id); // 👈
                    return (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        onAddToFavorites={agregarFavorito}
                        onRemoveFromFavorites={quitarFavorito}
                        isFavorite={favoritas.some((f) => f.id === movie.id)}
                        onDelete={eliminarPelicula}
                      />
                    );
                  })}
                </MovieList>
                {hayMas && (
                  <button
                    className={styles.verMasBtn}
                    onClick={() => toggleVerMas(gen)}
                  >
                    {mostrarTodas ? "Ver menos" : "Ver más"}
                  </button>
                )}
              </section>
            );
          })
        )
      ) : (
        <MovieList
          title={`Películas de ${categoria}`}
          description={categoryDescriptions[categoria] || ""}
        >
          {filtrar(categoria).length > 0 ? (
            filtrar(categoria).map((movie) => {
              console.log("Rendering MovieCard (categoría):", movie.title, "con id:", movie.id); // 👈
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onAddToFavorites={agregarFavorito}
                  onRemoveFromFavorites={quitarFavorito}
                  isFavorite={favoritas.some((f) => f.id === movie.id)}
                  onDelete={eliminarPelicula}
                />
              );
            })
          ) : (
            <p className={styles.mensajeSinResultados}>
              No se encontraron resultados para esta categoría.
            </p>
          )}
        </MovieList>
      )}
    </div>
  );
}

export default AllMovies;

