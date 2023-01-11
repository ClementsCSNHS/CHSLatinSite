import { useRef, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import styles from "./Home.module.scss";

export default function Home() {
  const [currSection, setCurrSection] = useState("domus");

  const refs = {
    domus: useRef(),
    about: useRef(),
    resources: useRef(),
    calendar: useRef(),
    gallery: useRef(),
  };

  useEffect(() => {
    const onScroll = () => {
      let curr;
      for (const x in refs) {
        let bounds = refs[x].current.getBoundingClientRect();
        if (bounds.top <= 0 && bounds.bottom >= 0) {
          curr = x;
        }
      }

      setCurrSection(curr);
    };
    window.addEventListener("scroll", onScroll);
  });

  return (
    <div className={styles.Home}>
      <svg
        fill="black"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className={styles.window}
      >
        <mask id="myMask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <rect x="40" y="40" width="20" height="20" fill="black"></rect>
        </mask>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#myMask)"
          fill="black"
          className={styles.window}
        />
      </svg>

      <Navigation selected={currSection} />

      <section ref={refs.domus} id="domus" className={styles.domus}>
        <h1 className={styles.domus_title}>CHS Latin Website</h1>
      </section>

      <section ref={refs.about} id="about" className={styles.about}>
        About
      </section>

      <section ref={refs.resources} id="resources" className={styles.resources}>
        Resources
      </section>

      <section ref={refs.calendar} id="calendar" className={styles.calendar}>
        Calendar
      </section>

      <section ref={refs.gallery} id="gallery" className={styles.gallery}>
        Gallery
      </section>
    </div>
  );
}
