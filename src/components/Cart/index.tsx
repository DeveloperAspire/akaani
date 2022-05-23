import { Icon, Button } from "../";

import styles from "./cart.module.scss";

const Cart = () => {
  return (
    <div className={styles["cart"]}>
      <div className={styles["cart__header"]}>
        <Icon iconName="arrowLeft" />
        <h3>My Cart</h3>
        <Button
          ariaLabel="cart"
          variant="cart"
          type="button"
          icon="shoppingBasket"
        />
      </div>
      <div className={styles["cart__items"]}></div>
      <div className={styles["cart__checkout"]}>
        <div className={styles["cart__checkout-container"]}>
          <p className={styles["cart__checkout-title"]}>Total</p>
          <p className={styles["cart__checkout-price"]}>$2,560</p>
        </div>

        <Button
          label="Done Shopping"
          ariaLabel="checkout"
          variant="primary"
          size="large"
          type="button"
        />
      </div>
    </div>
  );
};

export default Cart;
