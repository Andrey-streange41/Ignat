import BrandButton from "../../atoms/UI/BrandButton/BrandButton";
import styles from "./styles.module.scss";

interface PostProps {
  title: string;
  content: string;
  imageUrl: string;
}

export const Post = ({ title, content, imageUrl }: PostProps) => {
  return (
    <article className={styles.post}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{content}</p>
        <BrandButton
          classNames={styles.brandButton}
          onClick={() => {
            alert("Click");
          }}
        >
          До каталогу
        </BrandButton>
      </div>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.picture}
      ></div>
    </article>
  );
};
