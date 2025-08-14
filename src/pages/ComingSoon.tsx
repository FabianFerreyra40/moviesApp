
import { Link } from 'react-router-dom';
import styles from '../styles/ComingSoon.module.css';

function ComingSoon() {
  return (
    <div className={styles.proximamente}>
      <h1>🚧 Próximamente</h1>
      <p>Estamos trabajando para traerte las películas más vistas.</p>
      <p>Muy pronto habrá novedades. ¡Gracias por tu paciencia!</p>
      <Link to="/" className={styles.backButton}>Volver al inicio</Link>
    </div>
  );
}

export default ComingSoon;