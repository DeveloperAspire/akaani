import { useState } from "react";
import {
  Dashboard,
  NotificationBar,
  NavBar,
  Cart,
  Button,
} from "../../components";
import styles from "./home.module.scss";

const Home = () => {
  const [showCart, setShowCart] = useState(true);

  const displayCart = () => {
    setShowCart(!showCart);
  };
  return (
    <main className={styles["home"]}>
      <NavBar />
      <Dashboard />
      <NotificationBar />
      <Cart showCart={showCart} displayCart={displayCart} />

      <div className={styles["home__cart"]}>
        <span className={styles["home__cart-number"]}>4</span>
        <Button
          ariaLabel="cart"
          variant="cart"
          type="button"
          icon="shoppingBasket"
          handleClick={displayCart}
        />
      </div>
    </main>
  );
};

export default Home;
