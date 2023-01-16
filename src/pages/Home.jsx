import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navigation from "../components/Navigation";
import Marquee from "../components/Marquee";
import styles from "./Home.module.scss";
import bg from "../assets/Anime_Club.png";

export default function Home() {
  const [currSection, setCurrSection] = useState("domus");

  const refs = {
    domus: useRef(),
    about: useRef(),
    resources: useRef(),
    calendar: useRef(),
    gallery: useRef(),
  };

  const { scrollYProgress } = useScroll();
  const maskScale = useSpring(
    useTransform(scrollYProgress || 1, [0, 0.3], [1, 9]),
    {
      damping: 50,
    }
  );

  useEffect(() => {
    console.log(scrollYProgress, "scroll");
  }, [scrollYProgress]);

  useEffect(() => {
    const onScroll = () => {
      let curr;
      for (const x in refs) {
        let bounds = refs[x].current.getBoundingClientRect();
        if (bounds.top <= window.innerHeight / 2.5 && bounds.bottom >= 0) {
          curr = x;
        }
      }

      setCurrSection(curr);
    };
    window.addEventListener("scroll", onScroll);
  });

  return (
    <div className={styles.Home}>
      <div className={styles.background}></div>
      <motion.div className={styles.window} style={{ scale: maskScale }}>
        <svg
          fill="black"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className={styles.window_svg}
        >
          <mask id="myMask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <rect x="35" y="45" width="30" height="23" fill="black"></rect>
            <circle cx="50" cy="45" r="15" fill="black"></circle>
          </mask>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            mask="url(#myMask)"
            fill="black"
            className={styles.window_svg}
          />
        </svg>
      </motion.div>

      <Navigation selected={currSection} />
      <div className={styles.Content}>
        <section ref={refs.domus} id="domus" className={styles.domus}>
          <h1 className={styles.domus_title}>CHS Latin Website</h1>
        </section>

        <section ref={refs.about} id="about" className={styles.about}>
          <Marquee>Meet the Officers! </Marquee>
          About
        </section>

        <section
          ref={refs.resources}
          id="resources"
          className={styles.resources}
        >
          Resources
        </section>

        <section ref={refs.calendar} id="calendar" className={styles.calendar}>
          Calendar
        </section>

        <section ref={refs.gallery} id="gallery" className={styles.gallery}>
          Gallery
        </section>
      </div>
    </div>
  );
}
