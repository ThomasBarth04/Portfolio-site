import React, { useState } from "react";

import { thoughts } from "../../data/thoughts";
import { Section } from "../Section/Section";
import styles from "./Thoughts.module.css";

const PAGE_SIZE = 5;

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

// "YYYY-MM-DD" as a local date, so the day never shifts with the time zone.
const parseDate = (iso) => {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const sorted = [...thoughts].sort((a, b) => b.date.localeCompare(a.date));

const paragraphs = (body) =>
  body
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

const URL_PATTERN = /(https:\/\/[^\s]+[^\s.,;:!?)])/g;

const withLinks = (text) =>
  text.split(URL_PATTERN).map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={part}>
        {part.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")}
      </a>
    ) : (
      part
    )
  );

export const Thoughts = () => {
  const [shown, setShown] = useState(PAGE_SIZE);

  return (
    <Section id="thoughts" label="Thoughts" title="Notes on what I'm building and learning.">
      {sorted.length === 0 ? (
        <p className={styles.empty}>Nothing here yet.</p>
      ) : (
        <ol className={styles.feed}>
          {sorted.slice(0, shown).map(({ date, title, body }) => (
            <li key={`${date}-${title || body.slice(0, 24)}`}>
              <article className={styles.post}>
                <time className={styles.date} dateTime={date}>
                  {dateFormat.format(parseDate(date))}
                </time>
                <div className={styles.body}>
                  {title && <h3 className={styles.title}>{title}</h3>}
                  {paragraphs(body).map((text, i) => (
                    <p key={i}>{withLinks(text)}</p>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      )}

      {shown < sorted.length && (
        <button
          type="button"
          className={`btn btn-outline ${styles.more}`}
          onClick={() => setShown(shown + PAGE_SIZE)}
        >
          Older thoughts
        </button>
      )}
    </Section>
  );
};
