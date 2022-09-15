import React, { FC } from "react";
import { IImageView } from "../../types";
import { Card } from "../common/card";
import { Button } from "../common/button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const ImageView: FC<IImageView> = ({ imgUrl, setIsVisible }) => {
  return (
    <Card
      title="VIEW"
      bottom={
        <Button
          text="BACK"
          icon={<ArrowBackIosIcon />}
          onClick={() => setIsVisible(false)}
          outline
        />
      }
      close={() => setIsVisible(false)}
    >
      <div className="image-view">
        <img src={imgUrl} alt="" />
      </div>
    </Card>
  );
};
