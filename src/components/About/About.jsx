import React from "react";

import { Section } from "../Section/Section";
import styles from "./About.module.css";

const NOW = [
  {
    kicker: "Lead developer and co-owner",
    title: "Astriid",
    text: "I'm responsible for the backend and the AI in a Norwegian system for communications work: media monitoring, case work and analysis in one place.",
    href: "https://astriid.no",
    link: "astriid.no",
  },
  {
    kicker: "Tech consultant, Junior Consulting",
    title: "Vespa.ai",
    text: "Through Junior Consulting I'm currently on a client project at Vespa.ai, delivered alongside full-time studies.",
    href: "https://vespa.ai",
    link: "vespa.ai",
  },
  {
    kicker: "MSc Informatics, 2026 to 2028",
    title: "NTNU",
    text: "Master's in informatics with a specialisation in artificial intelligence. I'm also in Bedkom at Online, the student association for informatics.",
    href: "https://online.ntnu.no",
    link: "online.ntnu.no",
  },
];

export const About = () => {
  return (
    <Section
      id="about"
      label="About"
      lead
      title="Hi, I'm Thomas. I build backend and AI systems, and study artificial intelligence at NTNU."
    >
      <div className={styles.actions}>
        <a className="btn" href="mailto:thomasbarth@live.no">
          Get in touch
        </a>
        <a className="btn btn-outline" href="#timeline">
          See the timeline
        </a>
      </div>

      <div className={styles.story}>
        <div>
          <p>
            I'm 22, a developer and a master's student. I did my bachelor's in
            computer science at the University of Bergen, then moved to
            Trondheim in 2026 to study artificial intelligence at NTNU.
          </p>
          <p>
            Alongside the degree I'm lead developer and co-owner at Astriid,
            and I consult through Junior Consulting. Most of what I've built so
            far sits on the backend: API and SCIM integrations at RAYVN, a
            pension case-management system at KLP, and an AI card generator at
            Kantega with a security model that keeps the LLM out of the
            security path.
          </p>
        </div>
        <div>
          <p>
            Teaching has been a big part of it too. I was a teaching assistant
            at UiB for five semesters in a row, and my team won Labyrinten, the
            university's programming contest.
          </p>
          <p>
            Away from the keyboard it has mostly been badminton: gold in the
            national team
            championships and two junior national titles, followed by a few
            years coaching kids. Somewhere along the way I also ended up on the
            board of the student golf club in Bergen.
          </p>
        </div>
      </div>

      <h2 className={styles.nowTitle}>Right now</h2>
      <ul className={styles.now}>
        {NOW.map(({ kicker, title, text, href, link }) => (
          <li key={title} className={styles.card}>
            <p className={styles.kicker}>{kicker}</p>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{text}</p>
            <a className={styles.cardLink} href={href}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
