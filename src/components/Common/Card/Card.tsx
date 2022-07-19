import React, { FC } from "react";
import { ICard } from "../../../interfaces/types.ts";
import { Button } from "../Button/Button";
import CloseIcon from "@mui/icons-material/Close";

export const Card: FC<ICard> = ({
  title,
  subtitle,
  body,
  preBottom,
  bottom,
  close,
}) => {
  return (
    <div className='cContainer'>
      <div className='cGalleryWrapper'>
        <div className='cHeader'>
          <h3 className='cTitle'>{title}</h3>
          {close && <Button onlyIcon icon={<CloseIcon />} onClick={close} />}
        </div>
        <div className='cBody'>
          <h4 className='cSubtitle'>{subtitle}</h4>
          <div className='cGalleryList'>{body}</div>
        </div>
        <div>{preBottom}</div>
        <div className='cButtonsContainer'>{bottom}</div>
      </div>
    </div>
  );
};
