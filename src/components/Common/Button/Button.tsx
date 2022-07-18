import React, { FC } from "react";
import styles from "./Button.module.css";
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
          styles.button,
          { [styles.outline]: outline },
          { [styles.transparent]: transparent },
          { [styles.primary]: primary },
          { [styles.icon]: onlyIcon }
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
