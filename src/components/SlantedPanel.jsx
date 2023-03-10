import Navigation from "./Navigation";
import styles from "./SlantedPanel.module.scss";

export default function SlantedPanel({
  left_top,
  left_bottom,
  right_top,
  right_bottom,
    separation,
  separation_location,
}) {
    let diffTop = left_top - right_top
    let diffBottom = left_bottom - right_bottom
    let leftBlockTop = { separation_location, left_top - diffTop * separation_location };
let leftBlockBottom = {};

    


  return (
    <div className={styles.slanted_panel}>
      <div>
        <div></div>

        <div></div>
      </div>
    </div>
  );
}
