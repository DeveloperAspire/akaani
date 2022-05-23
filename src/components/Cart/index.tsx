import { Icon, Button, CartItem } from "../";

import styles from "./cart.module.scss";

interface CartProps {
  showCart: boolean;
  displayCart: () => void;
}

const Cart: React.FC<CartProps> = ({ showCart, displayCart }) => {
  const classname = showCart
    ? `${styles["cart"]} ${styles["cart--show"]}`
    : `${styles["cart"]}`;

  return (
    <div className={classname}>
      <div className={styles["cart__header"]}>
        <span onClick={displayCart}>
          <Icon iconName="arrowLeft" />
        </span>

        <h3>My Cart</h3>
        <span className={styles["cart__button"]}>
          <span className={styles["cart__number"]}>4</span>
          <Button
            ariaLabel="cart"
            variant="cart"
            type="button"
            icon="shoppingBasket"
          />
        </span>
      </div>
      <div className={styles["cart__items"]}>
        <CartItem
          name="Okazi Leaves"
          price="30"
          quantity="1 kg"
          userInitials="M"
        />
        <CartItem
          name="Okazi Leaves"
          price="120"
          quantity="4 kg"
          userInitials="R"
        />
        <CartItem
          name="Rice & Beans"
          price="50"
          quantity="1 kg"
          userInitials="M"
        />
        <CartItem
          name="Efo Stew Leaves"
          price="45"
          quantity="1 kg"
          userInitials="M"
        />
      </div>
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
