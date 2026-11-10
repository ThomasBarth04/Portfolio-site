import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Thoughts } from "./components/Thoughts/Thoughts";
import { Timeline } from "./components/Timeline/Timeline";

function App() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <main className={styles.main}>
        <About />
        <Timeline />
        <Thoughts />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
