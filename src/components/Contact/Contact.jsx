import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:thomasbarth@live.no"> Thomasbarth@live.no</a>
        </li>
        <li className={styles.link}>
          <a href="https://linkedin.com/in/thomas-barth-a57052283">linkedin.com/Thomas-barth</a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/ELmustasje">github.com/ELmustasje</a>
        </li>
      </ul>
    </footer>
  );
};
