
import { type ReactNode } from "react";
import styles from "../styles/MovieList.module.css";

type MovieListProps = {
  title: string;
  description: string;
  children: ReactNode; 
};

function MovieList({ title, description, children }: MovieListProps) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
      <div className={styles.moviesContainer}>{children}</div>
    </section>
  );
}

export default MovieList;