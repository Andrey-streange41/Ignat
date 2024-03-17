import styles from "./styles.module.scss";
interface HotProductCardProps {
  title: string;
  colorsAmount: number;
  type: string;
  picture: string;
  price: number;
}

const HotProductCard = ({
  title,
  type,
  colorsAmount,
  picture,
  price,
}: HotProductCardProps) => {
  return (
    <div className={styles.hotProductCard}>
      <div
        style={{ backgroundImage: `url(${picture})` }}
        className={styles.picture}
      >
        <img className={styles.like} src="/icons/like.svg" alt="like" />
      </div>
      <h3 className={styles.hotProductTitle}>{title}</h3>
      <div className={styles.addInfo}>
        <span>{type}</span>
        <span>залишилось {colorsAmount} кольори</span>
      </div>

      <span className={styles.price}>{price} грн.</span>
    </div>
  );
};

export default HotProductCard;
