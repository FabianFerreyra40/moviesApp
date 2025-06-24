

import { useState } from "react";
import Navbar from "./componentes/Navbar";
import MovieList from "./componentes/MovieList";
import MovieCard from "./componentes/MovieCard";
import VideoPlayer from "./componentes/VideoPlayer";
import { movies } from "./data/movies";
import styles from "./App.module.css";

function App() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");

  const reproducir = () => setShowPlayer(true);
  const cerrar = () => setShowPlayer(false);

  const filtrar = (cat: string) =>
    movies.filter(
      (movie) =>
        movie.category === cat &&
        movie.title.toLowerCase().includes(titulo.toLowerCase()) &&
        (categoria === "" || movie.category === categoria)
    );

  const cienciaFiccion = filtrar("Ciencia Ficción");
  const accion = filtrar("Acción");
  const drama = filtrar("Drama");
  const crimen = filtrar("Crimen");

  
  const noHayResultados = categoria === "" && cienciaFiccion.length === 0 && accion.length === 0 && drama.length === 0 && crimen.length === 0;

  return (
    <div className={styles.app}>
      <Navbar
        onTituloChange={setTitulo}
        onCategoriaChange={setCategoria}
        valorTitulo={titulo}
        valorCategoria={categoria}
      />

      {categoria === "" && !noHayResultados && (
        <>
          {cienciaFiccion.length > 0 && (
            <MovieList title="Películas de Ciencia Ficción" description="Explora mundos futuristas">
              {cienciaFiccion.map((movie) => (
                <MovieCard key={movie.id} {...movie} onClick={reproducir} />
              ))}
            </MovieList>
          )}

          {accion.length > 0 && (
            <MovieList title="Películas de Acción" description="Adrenalina y emoción en cada escena">
              {accion.map((movie) => (
                <MovieCard key={movie.id} {...movie} onClick={reproducir} />
              ))}
            </MovieList>
          )}

          {drama.length > 0 && (
            <MovieList title="Películas de Drama" description="Historias que llegan al corazón">
              {drama.map((movie) => (
                <MovieCard key={movie.id} {...movie} onClick={reproducir} />
              ))}
            </MovieList>
          )}

          {crimen.length > 0 && (
            <MovieList title="Películas de Crimen" description="Historias intensas y llenas de suspense">
              {crimen.map((movie) => (
                <MovieCard key={movie.id} {...movie} onClick={reproducir} />
              ))}
            </MovieList>
          )}
        </>
      )}

      {categoria === "" && noHayResultados && (
        <p className={styles.mensajeSinResultados}>No se encontraron resultados para tu búsqueda</p>
      )}

      {categoria !== "" && (
        <MovieList title={`Películas de ${categoria}`} description="">
          {filtrar(categoria).length > 0 ? (
            filtrar(categoria).map((movie) => (
              <MovieCard key={movie.id} {...movie} onClick={reproducir} />
            ))
          ) : (
            <p className={styles.mensajeSinResultados}>No se encontraron resultados</p>
          )}
        </MovieList>
      )}

      {showPlayer && <VideoPlayer onClose={cerrar} />}
    </div>
  );
}

export default App;






 



