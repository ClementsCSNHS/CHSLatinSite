import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navigation from "../components/Navigation";
import Marquee from "../components/Marquee";
import styles from "./Home.module.scss";

//temp
import Blank from '../assets/blank.png';

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
      damping: 30,
    }
  );
  const bgOpacity = useSpring(
    useTransform(scrollYProgress || 1, [0, 0.1], [1, 0.3]),
    {
      damping: 30,
    }
  );
  const bgZoom = useSpring(
    useTransform(scrollYProgress || 1, [0, 0.3], [1, 1.4]),
    {
      damping: 30,
    }
  );

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
      <motion.div
        className={styles.background}
        style={{ opacity: bgOpacity, scale: bgZoom }}
      ></motion.div>
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
          <h1 className={styles.domus_title}>
            <span>L</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>n</span>
            <span>&nbsp;</span>
            <span>C</span>
            <span>l</span>
            <span>u</span>
            <span>b</span>
          </h1>
          <h2 className={styles.domus_subtitle}>Clements High School</h2>
          <img className={styles.domus_wreath} src='wreath.png'></img>
          <div className={styles.domus_links}>
            <a href="https://www.instagram.com/clementslatin/" className={styles.domus_links_link} target="_blank">
              <img src='instagram.svg'/>
            </a>
            <a href="?facebook placeholder" className={styles.domus_links_link} target="_blank">
              <img src='facebook.svg'/>
            </a>
            <a href="https://discord.gg/JAwjaM7A99" className={styles.domus_links_link} target="_blank">
              <img src='discord.svg'/>
            </a>
          </div>
        </section>

        <section ref={refs.about} id='about' className={styles.about}>
          <div className={styles.about_desc}>
            <p>We are a local Latin Club chapter part of the Junior Classical League (JCL), aiming to maintain and share the love and knowledge of Classics. Through our meetings and student-led activities, our club also competes on the Area, State, and National level in a variety of prestige-holding organizations. The variety of contests ensure that all academic, athletic, and creative people have their preferred categories.</p>
            <p>We are also recognized on a distinguished level and receive tangible awards, serving to share their knowledge and learn interesting Classical information that could serve beneficial throughout everyday life.</p>
            <p>We meet almost every Wednesday @3 PM!</p>
            <p>Join our socials to stay updated.</p>
          </div>

          <div className={styles.about_top_space}></div>
            <Marquee>Meet the Officers! </Marquee>
          <div className={styles.about_bottom_space}></div>

          <div className={styles.about_officers}>
            <div className={styles.about_officer}>
              <img src={Blank} alt="John Tian" className={styles.about_officer_img} />
              <div className={styles.about_officer_info}>
                <div className={styles.about_officer_general}>
                  <h3 className={styles.about_officer_name}>JOHN TIAN</h3>
                  <div className={styles.about_officer_insta}></div>
                </div>
                <h5 className={styles.about_officer_title}>PRESIDENT</h5>
                <p className={styles.about_officer_text}>Hi everyone, I'm John and I'm a senior in Latin IV. My favorite club topic is Roman history. Outside of the Classics, I like sampling free food and watching unhealthy amounts of soccer games.</p>
              </div>
            </div>

            <div className={styles.about_officer}>
              <img src={Blank} alt="David Zhang" className={styles.about_officer_img} />
              <div className={styles.about_officer_info}>
                <div className={styles.about_officer_general}>
                  <h3 className={styles.about_officer_name}>David Zhang</h3>
                  <div className={styles.about_officer_insta}></div>
                </div>
                <h5 className={styles.about_officer_title}>VICE PRESIDENT</h5>
                <p className={styles.about_officer_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className={styles.about_officer}>
              <img src={Blank} alt="Anh Vu" className={styles.about_officer_img} />
              <div className={styles.about_officer_info}>
                <div className={styles.about_officer_general}>
                  <h3 className={styles.about_officer_name}>Anh Vu</h3>
                  <div className={styles.about_officer_insta}></div>
                </div>
                <h5 className={styles.about_officer_title}>CONTEST COORDINATOR</h5>
                <p className={styles.about_officer_text}>Hi all, my name is Anh and I'm a junior taking Latin III. I specialize in JCL's Greek Life and Literature academic topic. If I'm not working on a writing piece or doing karate, then you can find me out on a run or reading random articles on Wikipedia.</p>
              </div>
            </div>

            <div className={styles.about_officer}>
              <img src={Blank} alt="Sophia Cruz" className={styles.about_officer_img} />
              <div className={styles.about_officer_info}>
                <div className={styles.about_officer_general}>
                  <h3 className={styles.about_officer_name}>Sophia Cruz</h3>
                  <div className={styles.about_officer_insta}></div>
                </div>
                <h5 className={styles.about_officer_title}>SECRETARY</h5>
                <p className={styles.about_officer_text}>Salve! I'm Sophia and I am a junior in Latin III (the best period tbh). I enjoy studying Roman life (but not roleplaying it ...) and in my free time I love to watch Netflix romcoms, pretend I'm a Stardew Valley YouTuber, and stare at the ceiling in my room.</p>
              </div>
            </div>

            <div className={styles.about_officer}>
              <img src={Blank} alt="Alyssa Kuo" className={styles.about_officer_img} />
              <div className={styles.about_officer_info}>
                <div className={styles.about_officer_general}>
                  <h3 className={styles.about_officer_name}>Alyssa Kuo</h3>
                  <div className={styles.about_officer_insta}></div>
                </div>
                <h5 className={styles.about_officer_title}>TREASURER</h5>
                <p className={styles.about_officer_text}>Salve!!! My name is Alyssa and I am your Latin club treasurer. Currently, I am a junior in Latin III and enjoy painting in my free time. Also, I am a member of the Clements FFA and Band, where I play the flute. 🤍</p>
              </div>
            </div>

            <div className={styles.about_officer}>
              <img src={Blank} alt="Arthur Vo" className={styles.about_officer_img} />
              <div className={styles.about_officer_info}>
                <div className={styles.about_officer_general}>
                  <h3 className={styles.about_officer_name}>Arthur Vo</h3>
                  <div className={styles.about_officer_insta}></div>
                </div>
                <h5 className={styles.about_officer_title}>MASCOT</h5>
                <p className={styles.about_officer_text}>Hey everyone, I'm Arthur and I'm a senior in Latin III. I like to do mythology and advanced grammar. 90% of the time, you'll see me listening to obnoxiously loud music or playing my favorite game Hades. Also, if I crack my neck in class, I’m not dying, it’s just very loud.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={refs.resources}
          id="resources"
          className={styles.resources}
        >
          Resources
        </section>

        <section ref={refs.calendar} id="calendar" className={styles.calendar}>
          Gallery
        </section>

        <section ref={refs.gallery} id="gallery" className={styles.gallery}>
          Gallery
        </section>
      </div>
    </div>
  );
}
