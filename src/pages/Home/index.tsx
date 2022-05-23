import { Dashboard, NotificationBar, NavBar } from "../../components";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <main className={styles["home"]}>
      <NavBar />
      <Dashboard />
      <NotificationBar />
    </main>
  );
};

export default Home;
