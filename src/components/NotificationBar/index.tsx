import styles from "./nofification-bar.module.scss";

const NotificationBar = () => {
  return (
    <div className={styles["notification"]}>
      <div className={styles["notification__item"]}>
        <h3 className={styles["notification__title"]}>Invites</h3>
        <p className={styles["notification__text"]}>You have no invites</p>
      </div>
      <div className={styles["notification__item"]}>
        <h3 className={styles["notification__title"]}>Recent Payments</h3>
        <p className={styles["notification__text"]}>
          No Payment has been made.
        </p>
      </div>
      <div className={styles["notification__item"]}>
        <h3 className={styles["notification__title"]}>Previous Orders</h3>
        <p className={styles["notification__text"]}>
          You have created no order.
        </p>
      </div>
    </div>
  );
};

export default NotificationBar;
