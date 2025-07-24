import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

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
              onChange={(event) => onTituloChange(event.target.value)}
            />
            {showCategoryFilter && (
              <select
                value={valorCategoria}
                onChange={(event) => handleCategoriaChange(event.target.value)}
              >
                <option value="">Todas</option>
                <option value="Acción">Acción</option>
                <option value="Ciencia Ficción">Ciencia Ficción</option>
                <option value="Drama">Drama</option>
                <option value="Crimen">Crimen</option>
              </select>
            )}
          </div>
        )}

        <ul className={styles.navList}>
          <li><Link to="/" className={styles.navLink}>Inicio</Link></li>
          <li><Link to="/peliculas" className={styles.navLink}>Películas</Link></li>
          <li><Link to="/series" className={styles.navLink}>Series</Link></li>
          <li><Link to="/favoritos" className={styles.navLink}>Mi lista</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;





