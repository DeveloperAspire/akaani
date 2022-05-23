import { ReactComponent as CreditCard } from "../assets/icons/creditcard.svg";
import { ReactComponent as Gift } from "../assets/icons/gift.svg";
import { ReactComponent as History } from "../assets/icons/history-order.svg";
import { ReactComponent as ShoppingBasket } from "../assets/icons/shopping-basket.svg";
import { ReactComponent as Truck } from "../assets/icons/truck.svg";
import { ReactComponent as User } from "../assets/icons/user-icon.svg";
import { ReactComponent as LogOut } from "../assets/icons/logout.svg";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as ArrowLeft } from "../assets/icons/arrow-left.svg";

export type IconType =
  | "creditCard"
  | "gift"
  | "history"
  | "shoppingBasket"
  | "truck"
  | "user"
  | "logout"
  | "logo"
  | "search"
  | "arrowLeft";

export const icons: Record<IconType, JSX.Element> = {
  creditCard: <CreditCard />,
  gift: <Gift />,
  history: <History />,
  shoppingBasket: <ShoppingBasket />,
  truck: <Truck />,
  user: <User />,
  logout: <LogOut />,
  logo: <Logo />,
  search: <Search />,
  arrowLeft: <ArrowLeft />,
};
