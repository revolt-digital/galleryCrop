import React, { FC } from "react";
import styles from "./ImageView.module.css";
import { IImageView } from "../../interfaces/types.ts";
import { Card } from "../Common/Card/Card";
import { Button } from "../Common/Button/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const ImageView: FC<IImageView> = ({ imgUrl, setIsVisible }) => {
  return (
    <Card
      title="VIEW"
      body={
        <div className={styles.view}>
          <img src={imgUrl} alt="" />
        </div>
      }
      bottom={
        <Button
          icon={<ArrowBackIosIcon />}
          text="BACK"
          onClick={() => setIsVisible(false)}
          outline
        />
      }
      close={() => setIsVisible(false)}
    />
  );
};
