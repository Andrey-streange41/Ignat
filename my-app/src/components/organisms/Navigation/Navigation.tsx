import { navigation } from "../../../utils/consts";
import styles from "./styles.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {navigation.map((it) => (
        <a
        key={Math.random().toString(16)}
        className={`${styles.navItem} ${it.active ? styles.active : ""}`}
          href={it.url}
        >
          {it.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
