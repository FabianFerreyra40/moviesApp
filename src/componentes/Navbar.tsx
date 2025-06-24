
import React from 'react';
import styles from '../styles/Navbar.module.css';

type Props = {
  valorTitulo: string;
  valorCategoria: string;
  onTituloChange: (titulo: string) => void;
  onCategoriaChange: (categoria: string) => void;
};

const Navbar: React.FC<Props> = ({
  valorTitulo,
  valorCategoria,
  onTituloChange,
  onCategoriaChange
}) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>PeliClub</h1>

      <ul className={styles.navList}>
        <li><a href="">Inicio</a></li>
        <li><a href="">Películas</a></li>
        <li><a href="">Series</a></li>
        <li><a href="">Mi lista</a></li>
      </ul>

      
      <div className={styles.filtros}>
        <input
          type="text"
          placeholder="Buscar título..."
          value={valorTitulo}
          onChange={(event) => onTituloChange(event.target.value)}
        />
        <select
          value={valorCategoria}
          onChange={(event) => onCategoriaChange(event.target.value)}
        >
          <option value="">Todas</option>
          <option value="Acción">Acción</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Drama">Drama</option>
          <option value="Crimen">Crimen</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;

