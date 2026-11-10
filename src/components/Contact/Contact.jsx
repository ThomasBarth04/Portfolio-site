import React from "react";

import { Section } from "../Section/Section";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <>
      <Section id="contact" label="Contact" title="Want to talk? Send me a message.">
        <p className={styles.email}>
          <a href="mailto:thomasbarth@live.no">thomasbarth@live.no</a>
        </p>
        <ul className={styles.links}>
          <li>
            <a href="https://www.linkedin.com/in/thomas-barth-a57052283/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/ThomasBarth04">GitHub</a>
          </li>
        </ul>
      </Section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Thomas Barth</p>
        <p>
          Design inspired by <a href="https://andersnoren.se/teman/bjork-wordpress-theme/">Björk</a> by
          Anders Norén
        </p>
      </footer>
    </>
  );
};
