import styles from "./styles.module.scss";

interface SlideHeroItemProps {
  picture: string;
  title: string;
  description: string;
  addinfoTitle: string;
  addinfoDescription: string;
}
const SlideHeroItem = ({
  picture,
  title,
  description,
  addinfoTitle,
  addinfoDescription,
}: SlideHeroItemProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${picture})` }}
      className={styles.slideHeroItem}
    >
      <div className={styles.mainInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.addInfo}>
        <h3>{addinfoTitle}</h3>
        <p>{addinfoDescription}</p>
      </div>
    </div>
  );
};

export default SlideHeroItem;
