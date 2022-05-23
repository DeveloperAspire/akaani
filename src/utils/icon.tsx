import { ReactComponent as CreditCard } from "../assets/icons/creditcard.svg";
import { ReactComponent as Gift } from "../assets/icons/gift.svg";
import { ReactComponent as History } from "../assets/icons/history-order.svg";
import { ReactComponent as ShoppingBasket } from "../assets/icons/shopping-basket.svg";
import { ReactComponent as Truck } from "../assets/icons/truck.svg";
import { ReactComponent as User } from "../assets/icons/user-icon.svg";
import { ReactComponent as LogOut } from "../assets/icons/logout.svg";

export type IconType =
  | "creditCard"
  | "gift"
  | "history"
  | "shoppingBasket"
  | "truck"
  | "user"
  | "logout";

export const icons: Record<IconType, JSX.Element> = {
  creditCard: <CreditCard />,
  gift: <Gift />,
  history: <History />,
  shoppingBasket: <ShoppingBasket />,
  truck: <Truck />,
  user: <User />,
  logout: <LogOut />,
};