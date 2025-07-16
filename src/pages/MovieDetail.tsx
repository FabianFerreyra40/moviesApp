import { useParams, useNavigate, Link } from "react-router-dom";
import { movies } from "../data/movies";
import styles from "../styles/MovieDetail.module.css";

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const peliculaId = Number(id);
  const pelicula = movies.find((m) => m.id === peliculaId);

  if (!id || isNaN(peliculaId) || !pelicula) {
    return <p className={styles.mensaje}>Película no encontrada</p>;
  }

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.volver}>
        ← Volver
      </button>

      <div className={styles.detalle}>
        <img
          className={styles.imagen}
          src={pelicula.image}
          alt={pelicula.title}
        />
        <div className={styles.info}>
          <h2 className={styles.title}>{pelicula.title}</h2>
          <p>
            <strong>Categoría:</strong> {pelicula.category}
          </p>
          <p>
            <strong>Duración:</strong> {pelicula.duration} min
          </p>
          <p>
            <strong>Año:</strong> {pelicula.year}
          </p>
          <p>
            <strong>Descripción:</strong>{" "}
            {pelicula.description || "Sin descripción disponible."}
          </p>

          <Link to={`/pelicula/${pelicula.id}/play`} className={styles.botonPlay}>
            ▶️ Ver ahora
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;



