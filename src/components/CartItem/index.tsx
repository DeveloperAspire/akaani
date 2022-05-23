import Item from "../../assets/images/coconut.svg";

import styles from "./cart-item.module.scss";

interface CartItemProps {
  name: string;
  price: string;
  quantity: string;
  userInitials: string;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  quantity,
  userInitials,
}) => {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-item__image"]}>
        <img src={Item} alt="The item in your cart" />
      </div>
      <div className={styles["cart-item__details"]}>
        <p className={styles["cart-item__name"]}>{name} </p>
        <p className={styles["cart-item__price"]}>${price}</p>
      </div>

      <div className={styles["cart-item__quantity"]}>
        <select name="item quantity">
          <option value="1kg">{quantity}</option>
          <option value="2kg">2 kg</option>
          <option value="3kg">3 kg</option>
          <option value="4kg">4 kg</option>
        </select>
      </div>

      <div className={styles["cart-item__user"]}>{userInitials}</div>
    </div>
  );
};

export default CartItem;
