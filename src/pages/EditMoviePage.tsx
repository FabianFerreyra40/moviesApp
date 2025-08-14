import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CreateMovieForm from "../componentes/CreateMovieForm";
import type { NewMovie, Movie } from "../types";
import { movieService } from "../services/movieService";

type Props = {
  onUpdate: (movie: Movie) => Promise<void>;
};

const EditMoviePage = ({ onUpdate }: Props) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState<NewMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    movieService
      .getMovieById(Number(id))
      .then((movie: Movie) => {
        const { id: _, ...rest } = movie;
        setMovieData(rest);
      })
      .catch(() => setError("Película no encontrada"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (updatedMovie: NewMovie) => {
    if (!id) return;
    setSubmitLoading(true);
    setError(null);
    try {
      const movieWithId: Movie = { id: Number(id), ...updatedMovie };
      await onUpdate(movieWithId);
      navigate("/peliculas");
    } catch {
      setError("Error actualizando la película");
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!movieData) return null;

  return (
    <CreateMovieForm
      onCreate={handleSubmit}
      isLoading={submitLoading}
      error={error}
      initialData={movieData}
      submitLabel="Guardar cambios"
    />
  );
};

export default EditMoviePage;
