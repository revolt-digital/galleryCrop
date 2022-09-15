import React, { FC } from "react";
import { IButton } from "../../../types";
import cs from "classnames";

export const Button: FC<IButton> = ({
  text,
  onClick,
  icon,
  outline,
  primary,
  onlyIcon,
  transparent,
}) => {
  return (
      <button
        className={cs(
          'button',
          { 'button-outline': outline },
          { 'button-transparent': transparent },
          { 'button-primary': primary },
          { 'button-icon': onlyIcon }
        )}
        onClick={onClick}
      >
        <>
          {icon}
          {text}
        </>
      </button>
  );
};
