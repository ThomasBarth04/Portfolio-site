import React, { useState } from "react";

import timeline from "../../data/timeline.json";
import { Section } from "../Section/Section";
import styles from "./Timeline.module.css";

const FILTERS = [
  { key: "all", label: "Everything" },
  { key: "work", label: "Work" },
  { key: "education", label: "Education" },
  { key: "volunteering", label: "Volunteering" },
];

export const Timeline = () => {
  const [filter, setFilter] = useState("all");
  const entries =
    filter === "all" ? timeline : timeline.filter((e) => e.type === filter);

  return (
    <Section id="timeline" label="Timeline" title="The path so far, newest first.">
      <div className={styles.filters} role="group" aria-label="Filter timeline">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={`${styles.filter} ${
              filter === key ? styles.filterActive : ""
            }`}
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <ol className={styles.list}>
        {entries.map(({ period, title, org, url, place, points }) => (
          <li key={`${title}-${org}-${period}`} className={styles.entry}>
            <p className={styles.period}>{period}</p>
            <div className={styles.body}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.org}>
                {url ? <a href={url}>{org}</a> : org}
                {place && `, ${place}`}
              </p>
              {points.length > 0 && (
                <ul className={styles.points}>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};
