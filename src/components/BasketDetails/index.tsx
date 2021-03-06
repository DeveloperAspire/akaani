import { Button, BasketTabs } from "../";
import styles from "./basket-details.module.scss";

const BasketDetails = () => {
  return (
    <section className={styles["basket-details"]}>
      <div className={styles["basket-details__header"]}>
        <h2 className={styles["basket-details__title"]}>Baskets</h2>
        <Button
          label="Create Basket"
          ariaLabel="create basket"
          variant="primary"
          type="button"
        />
      </div>
      <BasketTabs />
    </section>
  );
};

export default BasketDetails;

//  <Button
//           ariaLabel="cart"
//           variant="cart"
//           type="button"
//           icon="shoppingBasket"
//         />
//         <Button
//           label="Done Shopping"
//           ariaLabel="checkout"
//           variant="primary"
//           size="large"
//           type="button"
//         />
