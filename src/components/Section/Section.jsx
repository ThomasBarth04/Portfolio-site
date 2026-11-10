import React from "react";

import styles from "./Section.module.css";

// A page section: small grey label, large heading, then content.
export const Section = ({ id, label, title, lead = false, children }) => {
  const Heading = lead ? "h1" : "h2";

  return (
    <section id={id} className={styles.section}>
      <p className={styles.label}>{label}</p>
      <Heading className={lead ? styles.leadTitle : styles.title}>
        {title}
      </Heading>
      {children}
    </section>
  );
};
