import styles from "./styles.module.scss";

interface HotproductSliderPaginationProps {
  current: number;
  total: number;
}
const HotproductSliderPagination = ({
  current,
  total,
}: HotproductSliderPaginationProps) => {
  return (
    <div className={styles.pagination}>
      <span>{current}</span>
      <span>/</span>
      <span>{total}</span>
    </div>
  );
};

export default HotproductSliderPagination;
