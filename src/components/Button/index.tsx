import classnames from "classnames";
import { IconType } from "../../utils/icon";
import { Icon } from "../";

import styles from "./button.module.scss";

interface ButtonProps {
  label?: string;
  ariaLabel: string;
  type: "button" | "submit";
  size?: "default" | "large";
  handleClick?: () => void;
  variant: "primary" | "cart";
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  ariaLabel,
  type,
  size,
  handleClick,
  variant,
  icon,
}) => {
  const className = classnames({
    [styles.button]: true,
    [styles[`button--${variant}`]]: Boolean(variant),
    [styles[`button--${size}`]]: Boolean(size),
  });

  return (
    <button
      aria-label={ariaLabel}
      type={type}
      onClick={handleClick}
      className={className}
    >
      {label && label}
      {icon && <Icon iconName={icon} />}
    </button>
  );
};

export default Button;
