import React, { FC, useState } from "react";
import styles from "./ImageView.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { IImageView } from "../../interfaces/types.ts";

export const ImageView: FC<IImageView> = ({ imgUrl, setIsVisible }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <CloseIcon onClick={() => setIsVisible(false)} />
          <h3 className={styles.title}>VIEW</h3>
        </div>
        <div className={styles.view}>
          <img src={imgUrl} />
        </div>
      </div>
    </div>
  );
};
