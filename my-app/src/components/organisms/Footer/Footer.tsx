import styles from "./footer.module.scss";
import { navigation } from "../../../utils/consts";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.column}>
          <h4>Контакт - центр</h4>
          <ul>
            <li>
              <a href="/">098 900 09 09 </a>
            </li>
            <li>
              <a href="/">Пн - Пт 09:00 - 21:00</a>
            </li>
            <li>
              <a href="/">Пн - Пт 09:00 - 21:00</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Покупцям</h4>
          <ul>
            <li>
              <a href="/">Оплата і доставка</a>
            </li>
            <li>
              <a href="/">Повернення</a>
            </li>
            <li>
              <a href="/">Питання та відповіді</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Особистий кабінет</h4>
          <ul>
            <li>
              <a href="/">Мої дані</a>
            </li>
            <li>
              <a href="/">Історія замовлень</a>
            </li>
            <li>
              <a href="/">Улюблені</a>
            </li>
            <li>
              <a href="/">Розсилки</a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Про компанію</h4>
          <ul>
            <li>
              <a href="/">Про нас</a>
            </li>
            <li>
              <a href="/">Новини</a>
            </li>
            <li>
              <a href="/">Стати партнером</a>
            </li>
            <li>
              <a href="/">Угода користувача</a>
            </li>
          </ul>
        </div>
      </div>
      <section className={styles.footerBottom}>
        <ul className={styles.footerNav}>
          {navigation.map((it) => (
            <li className={styles.footerNavItem}>
              <a href={it.url}>{it.label}</a>
            </li>
          ))}
        </ul>
        <span className={styles.right}>© 2022 — 2023 IGNAT. Усі права захищені.</span>
      </section>
    </footer>
  );
};

export default Footer;
