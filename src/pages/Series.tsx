import { useState, useEffect } from "react";
import Navbar from "../componentes/Navbar";
import styles from "../styles/Series.module.css";

const seriesImages = [
  "/squaid-game-2.jpg",
  "/walkingdead_daryl.jpg",
  "/you.jpg",
 ];

function Series() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === seriesImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.seriesPage}>
      <Navbar
        showSearch={true}
        showCategoryFilter={false}
        valorTitulo={searchTerm}
        onTituloChange={setSearchTerm}
      />

      <main
        className={styles.banner}
        style={{ backgroundImage: `url(${seriesImages[currentImageIndex]})` }}
      >
        <div className={styles.overlay}>
          <h2 className={styles.title}>📺 Próximamente: Series en PeliClub</h2>

          <p className={styles.description}>
            Estamos trabajando para traerte las mejores series.
            Mientras tanto, podés ver nuestras{" "}
            <a href="/peliculas" className={styles.link}>películas disponibles</a> o visitar{" "}
            <a href="/favoritos" className={styles.link}>tu lista personalizada</a>.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Series;



