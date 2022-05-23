import React from "react";

import { IconType, icons } from "../../utils/icon";

import "./icon.module.scss";

interface IconProps {
  iconName: IconType;
}

const Icon: React.FC<IconProps> = ({ iconName }) => {
  return <>{icons[iconName]}</>;
};

export default Icon;
