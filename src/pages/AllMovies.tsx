import { useState } from "react";
import MovieList from "../componentes/MovieList";
import MovieCard from "../componentes/MovieCard";
import { movies, type Movie } from "../data/movies";
import styles from "../styles/Home.module.css";
import Navbar from "../componentes/Navbar";

type AllMoviesProps = {
  favoritas: Movie[];
  agregarFavorito: (movie: Movie) => void;
  quitarFavorito: (movie: Movie) => void;
};

const categorias = [
  { key: "Ciencia Ficción", title: "Películas de Ciencia Ficción", description: "Explora mundos futuristas" },
  { key: "Acción", title: "Películas de Acción", description: "Adrenalina y emoción en cada escena" },
  { key: "Drama", title: "Películas de Drama", description: "Historias que llegan al corazón" },
  { key: "Crimen", title: "Películas de Crimen", description: "Historias intensas y llenas de suspense" },
];

function AllMovies({ favoritas, agregarFavorito, quitarFavorito }: AllMoviesProps) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");

  const filtrar = (cat: string) =>
    movies.filter(
      (movie) =>
        (cat === "" || movie.category === cat) &&
        movie.title.toLowerCase().includes(titulo.toLowerCase())
    );

  const noHayResultados = filtrar("").length === 0;
  const [verMasPorCategoria, setVerMasPorCategoria] = useState<Record<string, boolean>>({});

  const toggleVerMas = (cat: string) => {
    setVerMasPorCategoria((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <div className={styles.container}>
      <Navbar
        showSearch={true}
        onTituloChange={setTitulo}
        onCategoriaChange={setCategoria}
        valorTitulo={titulo}
        valorCategoria={categoria}
      />

      {categoria === "" ? (
        noHayResultados ? (
          <p className={styles.mensajeSinResultados}>No se encontraron resultados para tu búsqueda</p>
        ) : (
          categorias.map(({ key, title, description }) => {
            const pelis = filtrar(key);
            if (pelis.length === 0) return null;

            const mostrarTodas = verMasPorCategoria[key];
            const pelisMostrar = mostrarTodas ? pelis : pelis.slice(0, 6);
            const hayMasParaMostrar = pelis.length > 6;

            return (
              <section key={key}>
                <MovieList title={title} description={description}>
                  {pelisMostrar.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onAddToFavorites={agregarFavorito}
                      onRemoveFromFavorites={quitarFavorito}
                      isFavorite={favoritas.some((fav) => fav.id === movie.id)}
                    />
                  ))}
                </MovieList>

                {hayMasParaMostrar && (
                  <button
                    className={styles.verMasBtn}
                    onClick={() => toggleVerMas(key)}
                  >
                    {mostrarTodas ? "Ver menos" : "Ver más"}
                  </button>
                )}

                {mostrarTodas && (
                  <button
                    className={styles.volverBtn}
                    onClick={() => toggleVerMas(key)}
                  >
                    Volver
                  </button>
                )}
              </section>
            );
          })
        )
      ) : (
        <MovieList title={`Películas de ${categoria}`} description="">
          {filtrar(categoria).length > 0 ? (
            filtrar(categoria).map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onAddToFavorites={agregarFavorito}
                onRemoveFromFavorites={quitarFavorito}
                isFavorite={favoritas.some((fav) => fav.id === movie.id)}
              />
            ))
          ) : (
            <p className={styles.mensajeSinResultados}>No se encontraron resultados</p>
          )}
        </MovieList>
      )}
    </div>
  );
}

export default AllMovies;



