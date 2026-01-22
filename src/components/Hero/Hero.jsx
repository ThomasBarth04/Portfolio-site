import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Thomas</h1>
        <p className={styles.description}>
          I'm a computer science student at the University of Bergen, and board member BSI-golf.
          Winner of Labyrinten UiB (team programming contest), qualified to the final in Oslo. Overall chill dude.
        </p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
