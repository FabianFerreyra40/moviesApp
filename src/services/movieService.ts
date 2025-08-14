import { moviesDB, getNextId } from '../data/moviesProf';
import type { Movie } from '../types';

// Simula un pequeño delay para emular API real
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

type GenreGroup = {
  genre: string;
  movies: Movie[];
};

export const movieService = {
  // GET - Obtener todas las películas
  async getAllMovies(): Promise<Movie[]> {
    await delay(300);

    try {
      const stored = localStorage.getItem('moviesDB');

      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn("Error al leer películas desde localStorage:", error);
    }

    // Si no hay nada en localStorage, usar backup
    localStorage.setItem('moviesDB', JSON.stringify(moviesDB));
    return [...moviesDB];
  },

  // GET - Película por ID
  async getMovieById(id: number | string): Promise<Movie> {
    await delay(200);
    const movies = await this.getAllMovies();
    const movie = movies.find((m) => Number(m.id) === Number(id));
    if (!movie) throw new Error('Película no encontrada');
    return movie;
  },

  // GET - Películas por género
  async getMoviesByGenre(genre: string): Promise<Movie[]> {
    await delay(200);
    const movies = await this.getAllMovies();
    if (!genre) throw new Error('Género requerido');

    return movies.filter((movie) =>
      movie.genre?.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
  },

  // GET - Películas por actor
  async getMoviesByCast(castMember: string): Promise<Movie[]> {
    await delay(200);
    const movies = await this.getAllMovies();
    if (!castMember) throw new Error('Actor requerido');

    return movies.filter((movie) =>
      movie.cast?.some((actor) =>
        actor.toLowerCase().includes(castMember.toLowerCase())
      )
    );
  },

  // GET - Agrupadas por género
  async getGenres(): Promise<GenreGroup[]> {
    await delay(200);
    const movies = await this.getAllMovies();

    const genreMap: Record<string, Movie[]> = {};
    movies.forEach((movie) => {
      movie.genre?.forEach((genre) => {
        if (!genreMap[genre]) {
          genreMap[genre] = [];
        }
        genreMap[genre].push(movie);
      });
    });

    return Object.keys(genreMap)
      .map((genre) => ({
        genre,
        movies: genreMap[genre],
      }))
      .sort((a, b) => a.genre.localeCompare(b.genre));
  },

  // POST - Crear película
  async createMovie(movieData: Partial<Movie>): Promise<Movie> {
    await delay(400);
    const movies = await this.getAllMovies();

    const newMovie: Movie = {
      id: getNextId(),
      title: movieData.title?.trim() || "Sin título",
      year: movieData.year || 2000,
      genre: Array.isArray(movieData.genre) ? movieData.genre : [],
      director: movieData.director?.trim() || "Desconocido",
      rating: movieData.rating || 0,
      runtime: movieData.runtime || 0,
      plot: movieData.plot?.trim() || "Sin descripción",
      poster: movieData.poster?.trim() || "/no-image.jpeg",
      cast: Array.isArray(movieData.cast) ? movieData.cast : [],
    };

    movies.push(newMovie);
    localStorage.setItem('moviesDB', JSON.stringify(movies));
    return newMovie;
  },

  // PUT - Editar película
  async updateMovie(id: number | string, movieData: Partial<Movie>): Promise<Movie> {
    await delay(400);
    const movies = await this.getAllMovies();
    const index = movies.findIndex((m) => Number(m.id) === Number(id));
    if (index === -1) throw new Error('Película no encontrada');

    const updatedMovie = {
      ...movies[index],
      ...movieData,
    };

    movies[index] = updatedMovie;
    localStorage.setItem('moviesDB', JSON.stringify(movies));
    return updatedMovie;
  },

  // DELETE - Eliminar película
  async deleteMovie(id: number | string): Promise<{ success: boolean }> {
    await delay(300);
    let movies = await this.getAllMovies();
    const index = movies.findIndex((m) => Number(m.id) === Number(id));
    if (index === -1) throw new Error('Película no encontrada');

    movies.splice(index, 1);
    localStorage.setItem('moviesDB', JSON.stringify(movies));
    return { success: true };
  },

  // SEARCH - Buscar películas
  async searchMovies(query: string): Promise<Movie[]> {
    await delay(200);
    const movies = await this.getAllMovies();

    if (!query) return movies;

    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.director.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.some((g) => g.toLowerCase().includes(query.toLowerCase()))
    );
  },
};
