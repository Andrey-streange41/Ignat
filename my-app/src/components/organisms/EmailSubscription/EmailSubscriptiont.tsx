import BrandInput from "../../atoms/UI/BrandInput/BrandInput";
import styles from "./styles.module.scss";

const EmailSubscriptiont = () => {
  return (
    <div className={styles.emailSubscription}>
      <h2>Спіймай всі акції!</h2>
      <p>
        Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
        будуть з`влятись у нашому магазині. А у нас їх багато :D
      </p>
      <BrandInput classNames={styles.brandInput} />
    </div>
  );
};

export default EmailSubscriptiont;
