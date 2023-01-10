import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <div className={styles.Navigation}>
      {/* <h1 className={styles.title}>CHS Latin</h1> */}

      <div className={styles.navbar}>
        <div className={styles.navbar_connector}></div>

        <div className={styles.navbar_sections}>
          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#domus" className={styles.navbar_section_link}>DOMUS/VILLA</a>
          </div>

          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#about" className={styles.navbar_section_link}>ABOUT</a>
          </div>

          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#resources" className={styles.navbar_section_link}>RESOURCES</a>
          </div>

          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#calendar" className={styles.navbar_section_link}>CALENDAR</a>
          </div>

          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#gallery" className={styles.navbar_section_link}>GALLERY</a>
          </div>
        </div>
      </div>
    </div>
  )
}