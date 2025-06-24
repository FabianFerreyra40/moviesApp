import styles from "../styles/MovieCard.module.css";

type MovieCardProps = {
  image: string;
  title: string;
  category: string;
  duration: number;
  year: number;
  onClick: () => void;

};

function MovieCard({ image, title, category, duration, year, onClick  }: MovieCardProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.category}>{category}</p>
        <p className={styles.duration}>{duration} min</p>
        <p className={styles.year}>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;





