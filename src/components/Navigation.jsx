import styles from './Navigation.module.scss';

export default function Navigation({ selected }) {
  let selectedArr = [false, false, false, false, false];
  switch(selected) {
    case 'domus':
      selectedArr[0] = true;
      break;
    case 'about':
      selectedArr[1] = true;
      break;
    case 'resources':
      selectedArr[2] = true;
      break;
    case 'calendar':
      selectedArr[3] = true;
      break;
    case 'gallery':
      selectedArr[4] = true;
      break;
  }

  return (
    <div className={styles.Navigation}>
      <h1 className={styles.title}>CHS LATIN</h1>

      <div className={styles.navbar}>
        <div className={styles.navbar_connector}></div>

        <div className={styles.navbar_sections}>
          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#domus" className={`${styles.navbar_section_link} ${selectedArr[0] && styles.navbar_section_link_bold}`}>DOMUS/VILLA</a>
          </div>

          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#about" className={`${styles.navbar_section_link} ${selectedArr[1] && styles.navbar_section_link_bold}`}>ABOUT</a>
          </div>

          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#resources" className={`${styles.navbar_section_link} ${selectedArr[2] && styles.navbar_section_link_bold}`}>RESOURCES</a>
          </div>

          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#calendar" className={`${styles.navbar_section_link} ${selectedArr[3] && styles.navbar_section_link_bold}`}>CALENDAR</a>
          </div>

          <div className={styles.navbar_section}>
            <div className={styles.navbar_section_connector}></div>
            <a href="#gallery" className={`${styles.navbar_section_link} ${selectedArr[4] && styles.navbar_section_link_bold}`}>GALLERY</a>
          </div>
        </div>
      </div>
    </div>
  )
}