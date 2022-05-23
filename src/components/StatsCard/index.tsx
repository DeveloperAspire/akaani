import { Icon } from "../";
import { IconType } from "../../utils/icon";
import { iconStyle } from "../../utils/stats-icon";
import styles from "./stats-card.module.scss";

interface StatsCardProps {
  icon: IconType;
  title: string;
  value: string;
  monetary: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  title,
  value,
  monetary,
}) => {
  const classname = iconStyle(icon, styles);

  return (
    <div className={styles["stats-card"]}>
      <div className={classname}>
        <Icon iconName={icon} />
      </div>

      <div>
        <p className={styles["stats-card__title"]}>{title}</p>
        <p className={styles["stats-card__value"]}>
          {monetary ? `$${value}` : `${value}`}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
