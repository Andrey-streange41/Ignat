import styles from "./styles.module.scss";
interface BrandButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  classNames?: string;
  disabled?: boolean;
}

const BrandButton = ({
  onClick,
  children,
  classNames,
  disabled = false,
}: BrandButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.brandButton} ${classNames ? classNames : ""} ${disabled ? styles.disabled : ''}`}
    >
      {children}
    </button>
  );
};

export default BrandButton;
