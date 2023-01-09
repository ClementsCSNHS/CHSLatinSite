import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.Home}>
      <section id='domus' className={styles.domus}>
        <h1 className={styles.domus_title}>CHS Latin Website</h1>
      </section>

      <section id='about' className={styles.about}>
        About
      </section>

      <section id='resources' className={styles.resources}>
        Resources
      </section>

      <section id='calendar' className={styles.calendar}>
        Calendar
      </section>

      <section id='gallery' className={styles.gallery}>
        Gallery
      </section>
    </div>
  );
}