import React, { FC } from "react";
import classNames from "classnames";

type Props = {
  text?: string;
  outline?: boolean;
  onlyIcon?: boolean;
  transparent?: boolean;
  primary?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  text,
  outline,
  onlyIcon,
  transparent,
  primary,
  icon,
  onClick
}) => {
  return (
    <button
      className={classNames(
        "button",
        { "button-outline": outline },
        { "button-transparent": transparent },
        { "button-primary": primary },
        { "button-icon": onlyIcon }
      )}
      onClick={onClick}
    >
      <>
        {!!icon && icon}
        {!!text && text}
      </>
    </button>
  );
};

export default Button;