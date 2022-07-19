import React, { FC } from "react";
import { IImageView } from "../../interfaces/types.ts";
import { Card } from "../Common/Card/Card";
import { Button } from "../Common/Button/Button";

export const ImageView: FC<IImageView> = ({ imgUrl, setIsVisible }) => {
  return (
    <Card
      title="VIEW"
      body={
        <div className='ivView'>
          <img src={imgUrl} alt="" />
        </div>
      }
      bottom={
        <Button
          text="BACK"
          onClick={() => setIsVisible(false)}
          outline
        />
      }
      close={() => setIsVisible(false)}
    />
  );
};
