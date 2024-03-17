import { useState } from "react";
import BrandButton from "../BrandButton/BrandButton";
import styles from "./styles.module.scss";

interface BrandInputProps {
  classNames?: string;
}
const BrandInput = ({ classNames }: BrandInputProps) => {
  const [email, setEmail] = useState("");
  return (
    <label
      htmlFor={"email"}
      className={`${styles.brandInput} ${classNames ? classNames : ""}`}
    >
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        name="email"
        id="email"
        placeholder="Введіть"
        type="text"
      />
      <BrandButton
        disabled={!email}
        classNames={styles.brandButton}
        onClick={() => {
          alert(`Click`);
        }}
      >
        Підписатись
      </BrandButton>
    </label>
  );
};

export default BrandInput;
