import { IconType } from "./icon";

interface styleType {
  [key: string]: string;
}

interface IconStyleProps {
  icon: IconType;
  styles: styleType;
}

export const iconStyle = (icon: IconType, styles: styleType) => {
  let classname;

  if (icon === "truck") {
    classname = `${styles["stats-card__icon"]} ${styles["stats-card__icon--purple"]}`;
  }

  if (icon === "creditCard") {
    classname = `${styles["stats-card__icon"]} ${styles["stats-card__icon--cyan"]}`;
  }

  if (icon === "gift") {
    classname = `${styles["stats-card__icon"]} ${styles["stats-card__icon--purple-light"]}`;
  }
  if (icon === "shoppingBasket") {
    classname = `${styles["stats-card__icon"]} ${styles["stats-card__icon--orange"]}`;
  }

  return classname;
};
