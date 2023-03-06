import { Link } from "react-router-dom";
import styles from "./LinksMenu.module.scss";

function LinksMenu() {
  return (
    <>
      <Link to="/" className={styles.navigation__btns}>
        Exchange rates
      </Link>
      <Link to="/convert" className={styles.navigation__btns}>
        Convert Currency
      </Link>
    </>
  );
}

export default LinksMenu;
