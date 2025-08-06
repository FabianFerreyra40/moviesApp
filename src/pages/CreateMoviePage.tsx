import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateMovieForm from "../componentes/CreateMovieForm";
import type { NewMovie } from "../types";

type Props = {
  onCreate: (movie: NewMovie) => Promise<void>;
};

const CreateMoviePage = ({ onCreate }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreate = async (newMovie: NewMovie) => {
    setLoading(true);
    setError(null);
    try {
      await onCreate(newMovie);
      navigate("/peliculas");
    } catch {
      setError("Error creando la película.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CreateMovieForm onCreate={handleCreate} isLoading={loading} error={error} />
    </div>
  );
};

export default CreateMoviePage;
