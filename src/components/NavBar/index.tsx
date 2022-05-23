import styles from "./navbar.module.scss";
import { Icon } from "../../components";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__logo"]}>
        <Icon iconName="logo" />
      </div>
      <div className={styles["navbar__links"]}>
        <a href="/" className={styles["navbar__link"]}>
          <Icon iconName="user" />
          <span>Profile</span>
        </a>
        <a
          href="/"
          className={`${styles["navbar__link"]} ${styles["navbar__link--active"]}`}
        >
          <Icon iconName="shoppingBasket" />
          <span>Baskets</span>
        </a>
        <a href="/" className={styles["navbar__link"]}>
          <Icon iconName="history" />
          <span>Order History</span>
        </a>
      </div>
      <div className={styles["navbar__profile"]}>
        <div className={styles["navbar__profile-img"]}>LE</div>
        <p className={styles["navbar__profile-name"]}>Laura Edson</p>
        <p className={styles["navbar__profile-email"]}>lauraedson@work.com</p>
        <div className={styles["navbar__logout"]}>
          <Icon iconName="logout" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
