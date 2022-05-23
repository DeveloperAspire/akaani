import styles from "./dashboard.module.scss";
import { SearchInput } from "../";

const Dashboard = () => {
  return (
    <div className={styles["dashboard"]}>
      <div className={styles["dashboard__header"]}>
        <h1 className={styles["dashboard__title"]}>Good Evening, Laura!</h1>
        <SearchInput />
      </div>
    </div>
  );
};

export default Dashboard;
