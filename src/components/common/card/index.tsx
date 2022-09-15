import React, { FC } from "react";
import { ICard } from "../../../types";

export const Card: FC<ICard> = ({
  title,
  subtitle,
  children,
  preBottom,
  bottom,
  close,
}) => {
  return (
    <div className="gallery-wrapper">
      <div className="card-body">
        <h4 className="card-subtitle">{subtitle}</h4>
        {children}
      </div>
      <div>{preBottom}</div>
      <div className="card-button-container">{bottom}</div>
    </div>
  );
};
