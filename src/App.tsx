import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import Series from "./pages/Series";
import CategoryPage from "./pages/CategoryPage";
import MovieDetail from "./pages/MovieDetail";
import VideoPlayerWrapper from "./componentes/VideoPlayerWrapper";
import Favorites from "./componentes/Favorites";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import styles from "./App.module.css";

export type Movie = {
  id: number;
  image: string;
  title: string;
  category: string;
  duration: number;
  year: number;
};

function App() {
  const [favoritos, setFavoritos] = useState<Movie[]>([]);

  useEffect(() => {
    try {
      const data = localStorage.getItem("favoritas");
      if (data) setFavoritos(JSON.parse(data));
    } catch {
      setFavoritos([]);
    }
  }, []);

  const agregarFavorito = (movie: Movie) => {
    if (!favoritos.some(f => f.id === movie.id)) {
      const nuevos = [...favoritos, movie];
      setFavoritos(nuevos);
      localStorage.setItem("favoritas", JSON.stringify(nuevos));
    }
  };

  const quitarFavorito = (movie: Movie) => {
    const nuevos = favoritos.filter(f => f.id !== movie.id);
    setFavoritos(nuevos);
    localStorage.setItem("favoritas", JSON.stringify(nuevos));
  };

  const borrarTodasFavoritas = () => {
    setFavoritos([]);
    localStorage.removeItem("favoritas");
  };

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/peliculas"
          element={
            <AllMovies
              favoritas={favoritos}
              agregarFavorito={agregarFavorito}   
              quitarFavorito={quitarFavorito}     
            />
          }
        />
        <Route path="/proximamente" element={<ComingSoon />} />
        <Route path="/series" element={<Series />} />
        <Route
          path="/category/:categoria"
          element={
            <CategoryPage
              favoritos={favoritos}
              agregarFavorito={agregarFavorito}
              quitarFavorito={quitarFavorito}
            />
          }
        />
        <Route path="/pelicula/:id" element={<MovieDetail />} />
        <Route path="/pelicula/:id/play" element={<VideoPlayerWrapper />} />
        <Route
          path="/favoritos"
          element={
            <Favorites
              favoritas={favoritos}
              quitarDeFavoritos={quitarFavorito}
              borrarTodasFavoritas={borrarTodasFavoritas}
            />
          }
        />
        <Route path="/404" element={<NotFound />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;







 



