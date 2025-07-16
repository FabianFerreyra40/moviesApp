
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import styles from "../styles/Home.module.css";

const images = [
  "/la-isla-siniestra.jpg",
  "/JPEG.jpeg",
  "/rapido-y-furioso.jpg",
  "/avatar.jpg",
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.home}>
      <Navbar showSearch={false} />

      <main
        className={styles.banner}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className={styles.overlay}>
          <h1 className={styles.title}>Bienvenido a PeliClub</h1>
          <p className={styles.description}>
            Tu lugar para descubrir y disfrutar de películas y series.
          </p>
          <Link to="/proximamente" className={styles.exploreButton}>
            Más Visto
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;




