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
import CreateMoviePage from "./pages/CreateMoviePage";
import EditMoviePage from "./pages/EditMoviePage";
import styles from "./App.module.css";
import { useCreateMovie } from "./hooks/useCreateMovie";
import { movieService } from "./services/movieService";
import { useQueryClient } from "@tanstack/react-query";
import { moviesDB } from "./data/moviesProf";

export type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string[];
  director: string;
  rating: number;
  runtime: number;
  plot: string;
  poster: string;
  cast: string[];
};

function App() {
  const [favoritos, setFavoritos] = useState<Movie[]>(() => {
    try {
      const data = localStorage.getItem("favoritas");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const { mutateAsync: createMovie } = useCreateMovie();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!localStorage.getItem("moviesDB")) {
      localStorage.setItem("moviesDB", JSON.stringify(moviesDB));
      console.log("moviesDB initialized in localStorage");
    }
  }, []);

  const agregarFavorito = (movie: Movie) => {
    if (!favoritos.some((f) => f.id === movie.id)) {
      const nuevos = [...favoritos, movie];
      setFavoritos(nuevos);
      localStorage.setItem("favoritas", JSON.stringify(nuevos));
    }
  };

  const quitarFavorito = (movie: Movie) => {
    const nuevos = favoritos.filter((f) => f.id !== movie.id);
    setFavoritos(nuevos);
    localStorage.setItem("favoritas", JSON.stringify(nuevos));
  };

  const borrarTodasFavoritas = () => {
    setFavoritos([]);
    localStorage.removeItem("favoritas");
  };

  const handleUpdateMovie = async (updatedMovie: Movie) => {
    try {
      await movieService.updateMovie(updatedMovie.id, updatedMovie);
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    } catch (error) {
      console.error("Error actualizando película:", error);
      throw error;
    }
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
              favoritas={favoritos}
              agregarFavorito={agregarFavorito}
              quitarFavorito={quitarFavorito}
            />
          }
        />
        <Route
          path="/editar/:id"
          element={<EditMoviePage onUpdate={handleUpdateMovie} />}
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
        <Route
          path="/crear"
          element={
            <CreateMoviePage
              onCreate={async (movie) => {
                await createMovie(movie);
              }}
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
