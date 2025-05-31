
import MovieList from "./componentes/MovieList";
import MovieCard from "./componentes/MovieCard";
import { movies } from "./data/movies";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MovieList title="Películas de Ciencia Ficción" description="Explora mundos futuristas">
        {movies.map(movie => movie.category === "Ciencia Ficción" && <MovieCard key={movie.id} {...movie} />)}
      </MovieList>
      <MovieList title="Películas de Acción" description="Adrenalina y emoción en cada escena">
        {movies.map(movie => movie.category === "Acción" && <MovieCard key={movie.id} {...movie} />)}
      </MovieList>
      <MovieList title="Películas de Drama" description="Historias que llegan al corazón">
        {movies.map(movie => movie.category === "Drama" && <MovieCard key={movie.id} {...movie} />)}
      </MovieList>
      <MovieList title="Películas de Crimen" description="Historias intensas y llenas de suspense">
        {movies.map(movie => movie.category === "Crimen" && <MovieCard key={movie.id} {...movie} />)}
      </MovieList>
    </div>
  );
}



export default App;


