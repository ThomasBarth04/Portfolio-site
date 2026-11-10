import React, { useState } from "react";

import projects from "../../data/projects.json";
import { Section } from "../Section/Section";
import styles from "./Projects.module.css";

const LINKS = [
  { key: "site", label: "Visit" },
  { key: "source", label: "Source" },
  { key: "demo", label: "Demo" },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((project) => project.feature);
  const visible = showAll ? projects : featured;

  return (
    <Section id="projects" label="Projects" title="Things I've built on the side.">
      <ul className={styles.list}>
        {visible.map((project) => (
          <li key={project.title} className={styles.project}>
            <div className={styles.head}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.skills}>{project.skills.join(" · ")}</p>
            </div>
            <div className={styles.body}>
              <p>{project.description}</p>
              <p className={styles.links}>
                {LINKS.filter(({ key }) => project[key]).map(({ key, label }) => (
                  <a key={key} href={project[key]}>
                    {label}
                  </a>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {featured.length < projects.length && (
        <button
          type="button"
          className={`btn btn-outline ${styles.more}`}
          aria-expanded={showAll}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show fewer" : "Show all projects"}
        </button>
      )}
    </Section>
  );
};
