import styles from "./styles.module.scss";

interface IconButtonProps {
  url: string;
  alt: string;
  iconSrc: string;
}
export const IconButton = ({ url, alt, iconSrc }: IconButtonProps) => {
  return (
    <a className={styles.iconButton} href={url}>
      <img className={styles.icon} src={iconSrc} alt={alt} />
    </a>
  );
};
