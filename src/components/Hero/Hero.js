import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
    <header className={styles.component}>
        <h2 className={styles.title}>Things to do!</h2>
        <img src="https://i.postimg.cc/6pLP9t9Q/space-1.png" className={styles.image}></img>
    </header>
);

export default Hero;