import styles from "./dashboard.module.scss";
import { SearchInput, StatsCard, BasketDetails } from "../";

const Dashboard = () => {
  return (
    <div className={styles["dashboard"]}>
      <div className={styles["dashboard__header"]}>
        <h1 className={styles["dashboard__title"]}>Good Evening, Laura!</h1>
        <SearchInput />
      </div>

      <div className={styles["dashboard__stats"]}>
        <StatsCard
          icon="truck"
          title="In-Transit Jobs"
          value="0"
          monetary={false}
        />
        <StatsCard
          icon="creditCard"
          title="Total Paid"
          value="0.00"
          monetary={true}
        />
        <StatsCard
          icon="gift"
          title="Completed Jobs"
          value="0"
          monetary={false}
        />
        <StatsCard
          icon="shoppingBasket"
          title="Completed Jobs"
          value="0"
          monetary={false}
        />
      </div>

      <BasketDetails />
    </div>
  );
};

export default Dashboard;
