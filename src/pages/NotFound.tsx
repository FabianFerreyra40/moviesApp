import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Página no encontrada</h1>
      <p className={styles.mensaje}>
        La página que estás buscando no existe o fue movida.
      </p>
      <Link to="/" className={styles.boton}>
        ⬅️ Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
