import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    return(
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>PeliClub</h1>
            <ul className={styles.navList}>
                <li><a href="">Inicio</a></li>
                <li><a href="">Películas</a></li>
                <li><a href="">Series</a></li>
                <li><a href="">Mi lista</a></li>
            </ul>

        </nav>
    )};

export default Navbar;