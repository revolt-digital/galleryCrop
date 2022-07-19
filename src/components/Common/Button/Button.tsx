import React, { FC } from "react";
import { IButton } from "../../../interfaces/types.ts";
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
          'btnButton',
          { 'btnOutline': outline },
          { 'btnTransparent': transparent },
          { 'btnPrimary': primary },
          { 'btnIcon': onlyIcon }
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
