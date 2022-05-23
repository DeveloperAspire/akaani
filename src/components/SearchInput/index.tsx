import { Icon } from "../";

import styles from "./search-input.module.scss";

const SearchInput = () => {
  return (
    <div className={styles["controller"]}>
      <Icon iconName="search" />
      <input type="text" placeholder="Search Basket" />
    </div>
  );
};

export default SearchInput;
