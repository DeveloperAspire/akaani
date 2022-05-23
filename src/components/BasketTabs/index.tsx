import { useState } from "react";
import { Icon } from "../";
import styles from "./basket-tabs.module.scss";

const BasketTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["container__bloc-tabs"]}>
        <div className={styles["container__tabs-group"]}>
          <button
            className={
              toggleState === 1
                ? `${styles["container__tabs"]} ${styles["container__active-tabs"]}`
                : `${styles["container__tabs"]}`
            }
            onClick={() => toggleTab(1)}
          >
            Paid
          </button>
          <button
            className={
              toggleState === 2
                ? `${styles["container__tabs"]} ${styles["container__active-tabs"]}`
                : `${styles["container__tabs"]}`
            }
            onClick={() => toggleTab(2)}
          >
            Pending
          </button>
          <button
            className={
              toggleState === 3
                ? `${styles["container__tabs"]} ${styles["container__active-tabs"]}`
                : `${styles["container__tabs"]}`
            }
            onClick={() => toggleTab(3)}
          >
            Completed
          </button>
        </div>
      </div>

      <div className={styles["content-tabs"]}>
        <div
          className={
            toggleState === 1
              ? `${styles["container__content"]} ${styles["container__active-content"]}`
              : `${styles["container__content"]}`
          }
        >
          <div className={styles["container__content--icon"]}>
            <Icon iconName="shoppingBasket" />
          </div>
          <p>No Paid Baskets, yet!</p>
        </div>

        <div
          className={
            toggleState === 2
              ? `${styles["container__content"]} ${styles["container__active-content"]}`
              : `${styles["container__content"]}`
          }
        >
          <div className={styles["container__content--icon"]}>
            <Icon iconName="shoppingBasket" />
          </div>
          <p>No Pending Baskets, yet!</p>
        </div>

        <div
          className={
            toggleState === 3
              ? `${styles["container__content"]} ${styles["container__active-content"]}`
              : `${styles["container__content"]}`
          }
        >
          <div className={styles["container__content--icon"]}>
            <Icon iconName="shoppingBasket" />
          </div>
          <p>No Completed Orders Baskets, yet!</p>
        </div>
      </div>
    </div>
  );
};

export default BasketTabs;
