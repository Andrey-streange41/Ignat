import { IconButton } from "../../atoms/IconButton/IconButton";
import { Logo } from "../../atoms/Logo/Logo";
import HeaderMenu from "../../molecules/HeaderMenu/HeaderMenu";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderMenu />
      <section className={styles.headerUI}>
        <Logo />
        <Navigation />
        <section className={styles.rightPart}>
          <Search />
          <IconButton iconSrc="/icons/heart.svg" alt="heart" url="/favorite" />
          <IconButton iconSrc="/icons/bag.svg" alt="bag" url="/cart" />
        </section>
      </section>
    </div>
  );
};

export default Header;
