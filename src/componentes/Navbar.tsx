import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { movieService } from '../services/movieService';

type Props = {
  valorTitulo?: string;
  valorCategoria?: string;
  onTituloChange?: (titulo: string) => void;
  onCategoriaChange?: (categoria: string) => void;
  showSearch?: boolean;
  showCategoryFilter?: boolean;
};

const Navbar: React.FC<Props> = ({
  valorTitulo = '',
  valorCategoria = '',
  onTituloChange = () => {},
  onCategoriaChange = () => {},
  showSearch = false,
  showCategoryFilter = true,
}) => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    movieService.getAllMovies()
      .then((movies) => {
        if (!Array.isArray(movies)) {
          setGenres([]);
          return;
        }

        const allGenres = movies.flatMap((m) =>
          Array.isArray(m.genre) ? m.genre : []
        );

        const unique = Array.from(new Set(allGenres));
        setGenres(unique);
      })
      .catch((err) => {
        console.error('Error loading genres', err);
        setGenres([]);
      });
  }, []);

  const handleCategoriaChange = (categoria: string) => {
    onCategoriaChange?.(categoria);
    if (categoria) {
      navigate(`/category/${categoria.toLowerCase()}`);
    } else {
      navigate('/');
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <h1 className={styles.logo}>🎬 PeliClub</h1>

        {showSearch && (
          <div className={styles.filtros}>
            <input
              type="text"
              placeholder="Buscar título..."
              value={valorTitulo}
              onChange={(e) => onTituloChange(e.target.value)}
            />
            {showCategoryFilter && (
              <select
                value={valorCategoria}
                onChange={(e) => handleCategoriaChange(e.target.value)}
              >
                <option value="">Todas</option>
                {genres.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/peliculas" className={styles.navLink}>
              Películas
            </Link>
          </li>
          <li>
            <Link to="/series" className={styles.navLink}>
              Series
            </Link>
          </li>
          <li>
            <Link to="/favoritos" className={styles.navLink}>
              Mi lista
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;




