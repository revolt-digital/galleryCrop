import React, { FC } from "react";
import { ICard } from "../../../interfaces/types.ts";

export const Card: FC<ICard> = ({
  title,
  subtitle,
  body,
  preBottom,
  bottom,
  close,
}) => {
  return (
    <div className="cGalleryWrapper">
      <div className="cBody">
        <h4 className="cSubtitle">{subtitle}</h4>
        <div className="cGalleryList">{body}</div>
      </div>
      <div>{preBottom}</div>
      <div className="cButtonsContainer">{bottom}</div>
    </div>
  );
};
