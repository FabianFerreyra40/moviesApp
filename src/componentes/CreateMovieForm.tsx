import { useState, useEffect } from "react";
import styles from "../styles/CreateMovieForm.module.css";

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

export type NewMovie = Omit<Movie, "id">;

type Props = {
  onCreate: (movie: NewMovie) => void;
  isLoading: boolean;
  error: string | null;
  initialData?: NewMovie;        
  submitLabel?: string;          
};

const CreateMovieForm = ({
  onCreate,
  isLoading,
  error,
  initialData,
  submitLabel = "Crear Película",
}: Props) => {
  const [formData, setFormData] = useState<NewMovie>(
    initialData || {
      title: "",
      year: new Date().getFullYear(),
      genre: [],
      director: "",
      rating: 0,
      runtime: 0,
      plot: "",
      poster: "",
      cast: [],
    }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const [castInput, setCastInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "genre" && e.target instanceof HTMLSelectElement) {
      const selectedGenres = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      );
      setFormData((prev) => ({
        ...prev,
        genre: selectedGenres,
      }));
    } else if (["year", "rating", "runtime"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddCast = () => {
    if (castInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        cast: [...prev.cast, castInput.trim()],
      }));
      setCastInput("");
    }
  };

  const handleRemoveCast = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      cast: prev.cast.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{initialData ? "Editar película" : "Crear nueva película"}</h2>

      <input
        name="title"
        placeholder="Título"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        name="poster"
        placeholder="URL del póster"
        value={formData.poster}
        onChange={handleChange}
        required
      />

      <input
        name="director"
        placeholder="Director"
        value={formData.director}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="year"
        placeholder="Año"
        value={formData.year}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="runtime"
        placeholder="Duración (min)"
        value={formData.runtime}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="rating"
        placeholder="Rating (0-10)"
        min="0"
        max="10"
        step="0.1"
        value={formData.rating}
        onChange={handleChange}
        required
      />

      <textarea
        name="plot"
        placeholder="Descripción"
        value={formData.plot}
        onChange={handleChange}
        required
      />

      <label>Géneros</label>
      <select
        name="genre"
        multiple
        value={formData.genre}
        onChange={handleChange}
        required
      >
        <option value="Action">Acción</option>
        <option value="Sci-Fi">Ciencia Ficción</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crimen</option>
        <option value="Romance">Romance</option>
        <option value="Thriller">Thriller</option>
      </select>

      <label>Reparto</label>
      <div className={styles.castInputGroup}>
        <input
          type="text"
          value={castInput}
          placeholder="Agregar actor"
          onChange={(e) => setCastInput(e.target.value)}
        />
        <button type="button" onClick={handleAddCast}>
          Añadir
        </button>
      </div>

      <ul className={styles.castList}>
        {formData.cast.map((actor, index) => (
          <li key={index}>
            {actor}{" "}
            <button type="button" onClick={() => handleRemoveCast(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>

      <button type="submit" disabled={isLoading}>
        {isLoading ? (initialData ? "Guardando..." : "Creando...") : submitLabel}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default CreateMovieForm;
