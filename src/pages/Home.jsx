import { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import styles from './Home.module.scss';

//temp
import Blank from '../assets/blank.png';

export default function Home() {
  const [currSection, setCurrSection] = useState('domus');

  const refs = {
    domus: useRef(),
    about: useRef(),
    resources: useRef(),
    calendar: useRef(),
    gallery: useRef()
  };

  useEffect(() => {
    const onScroll = () => {
      let curr;
      for(const x in refs) {
        let bounds = refs[x].current.getBoundingClientRect();
        if(bounds.top <= 0 && bounds.bottom >= 0) {
          curr = x;
        }
      }

      setCurrSection(curr);
    };
    window.addEventListener("scroll", onScroll);
  });

  return (
    <div className={styles.Home}>
      <Navigation selected={currSection} />

      <section ref={refs.domus} id='domus' className={styles.domus}>
        <h1 className={styles.domus_title}>CHS Latin Website</h1>
      </section>

      <section ref={refs.about} id='about' className={styles.about}>
        <div className={styles.about_desc}>
          <p>We are a local Latin Club chapter part of the Junior Classical League (JCL), aiming to maintain and share the love and knowledge of Classics. Through our meetings and student-led activities, our club also competes on the Area, State, and National level in a variety of prestige-holding organizations. The variety of contests ensure that all academic, athletic, and creative people have their preferred categories.</p>
          <p>We are also recognized on a distinguished level and receive tangible awards, serving to share their knowledge and learn interesting Classical information that could serve beneficial throughout everyday life.</p>
          <p>We meet almost every Wednesday @3 PM!</p>
          <p>Join our socials to stay updated.</p>
        </div>

        <div className={styles.about_divider}>
          <div className={styles.about_divider_text}>MEET THE OFFICERS! MEET THE OFFICERS! MEET THE OFFICERS!</div>
        </div>

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

        <div className={styles.about_events}>
          <div className={styles.about_event}>
            <img src={Blank} alt="JCL" className={styles.about_event_img} />
            <div className={styles.about_event_info}>
              <h3 className={styles.about_event_name}>JCL</h3>
              <p className={styles.about_event_desc}>Join Junior Classical League! Here, you can demonstrate your passion for the Classics and gain recognition by competing at the area, state, and national level! There are contest categories for everyone: Academic, Classical Civilization (creative arts), Certamen (see below), and Ludi (athletics).</p>
            </div>
          </div>

          <div className={styles.about_event}>
            <div className={styles.about_event_info}>
              <h3 className={styles.about_event_name}>CERTAMEN</h3>
              <p className={styles.about_event_desc}>One of the events you can participate in at JCL! It is a quiz-bowl style game that tests teams of 4 players on Classics topics including but not limited to history, mythology, Latin grammar, literature, vocabulary, mottos, and geography... It's fast-paced, extremely engaging - the ultimate way to learn a bunch of classical stuff and apply it!</p>
            </div>
            <img src={Blank} alt="Certamen" className={styles.about_event_img} />
          </div>

          <div className={styles.about_event}>
            <img src={Blank} alt="NLE" className={styles.about_event_img} />
            <div className={styles.about_event_info}>
              <h3 className={styles.about_event_name}>NLE</h3>
              <p className={styles.about_event_desc}>The National Latin Exam is a test administered to Latin students across the nation, giving them the opportunity to receive merit-based recognition. The tests are based on information learned in Latin class, and based on scores, you can win certificates, medals, and even scholarships!</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={refs.resources} id='resources' className={styles.resources}>
        Resources
      </section>

      <section ref={refs.calendar} id='calendar' className={styles.calendar}>
        Calendar
      </section>

      <section ref={refs.gallery} id='gallery' className={styles.gallery}>
        Gallery
      </section>
    </div>
  );
}