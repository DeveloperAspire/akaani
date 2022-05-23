import { Dashboard, NotificationBar, NavBar, Cart } from "../../components";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <main className={styles["home"]}>
      <NavBar />
      <Dashboard />
      <NotificationBar />
      <Cart />
    </main>
  );
};

export default Home;
