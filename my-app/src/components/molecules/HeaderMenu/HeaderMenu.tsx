import styles from "./styles.module.scss";

const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      <div className={styles.leftMenu}>
        <span className={styles.phone}>098 900 09 09</span>
        <span className={styles.item}>Допомога</span>
      </div>
      <div className={styles.rightMenu}>
        <a href="/" className={styles.item}>
          Увійти
        </a>
        <span className={styles.item}>/</span>
        <a className={styles.item} href="/">
          Зареєструватися
        </a>
      </div>
    </div>
  );
};

export default HeaderMenu;
