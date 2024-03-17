
interface BlackArrowProps {
  direction: "right" | "left";
  disabled?: boolean;
}

const ArrowIcon = ({ direction, disabled = false }: BlackArrowProps) => {
  return (
    <svg
      style={{ transform: direction === "right" ? `` : `scaleX(-1)` }}
      width="25"
      height="7"
      viewBox="0 0 25 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 3.5L20 0.613249V6.38675L25 3.5ZM0 4L20.5 4V3L0 3L0 4Z"
        fill={disabled ? "#959595" : "#000"}
      />
    </svg>
  );
};

export default ArrowIcon;
