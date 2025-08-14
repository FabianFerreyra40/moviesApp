import type { Movie } from "../types";

export const transformToLocalMovie = (apiMovie: any): Movie => ({
  id: apiMovie.id,
  title: apiMovie.title || "Título desconocido",
  year: apiMovie.year || 0,
  genre: Array.isArray(apiMovie.genre) ? apiMovie.genre : [],
  director: apiMovie.director || "Desconocido",
  rating: apiMovie.rating || 0,
  runtime: apiMovie.runtime || 0,
  plot: apiMovie.plot || "Sin descripción",
  poster: apiMovie.poster || "",
  cast: Array.isArray(apiMovie.cast) ? apiMovie.cast : [],
});
