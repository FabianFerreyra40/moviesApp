import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieService } from "../services/movieService";
import styles from "../styles/MovieDetail.module.css";
import type { Movie } from "../types";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [pelicula, setPelicula] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      setError("ID de película no válido");
      setLoading(false);
      return;
    }

    const fetchMovie = async () => {
      try {
        const data = await movieService.getMovieById(Number(id));
        if (data) {
          setPelicula(data);
        } else {
          setError("Película no encontrada");
        }
      } catch (err) {
        setError("Error al cargar la película");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleVolver = () => {
    navigate(-1);
  };

  if (loading) {
    return <p className={styles.mensaje}>Cargando detalles de la película...</p>;
  }

  if (error) {
    return <p className={styles.mensaje} style={{ color: "red" }}>{error}</p>;
  }

  if (!pelicula) {
    return <p className={styles.mensaje}>Película no encontrada</p>;
  }

  return (
    <>
      <button onClick={handleVolver} className={styles.volver}>
        ← Volver
      </button>

      <div className={styles.container}>
        <div className={styles.detalle}>
          <img
            className={styles.imagen}
            src={pelicula.poster || "/no-image.jpeg"}
            alt={pelicula.title}
            onError={(e) => (e.currentTarget.src = "/no-image.jpeg")}
          />
          <div className={styles.info}>
            <h2 className={styles.title}>{pelicula.title}</h2>
            <p><strong>Género:</strong> {pelicula.genre.join(", ")}</p>
            <p><strong>Duración:</strong> {pelicula.runtime} min</p>
            <p><strong>Año:</strong> {pelicula.year}</p>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Calificación:</strong> {pelicula.rating}</p>
            <p><strong>Descripción:</strong> {pelicula.plot || "Sin descripción disponible."}</p>
            <p><strong>Reparto:</strong> {pelicula.cast.join(", ")}</p>

            <Link to={`/pelicula/${pelicula.id}/play`} className={styles.botonPlay}>
              ▶️ Ver ahora
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;


