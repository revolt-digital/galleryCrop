import React, { FC } from "react";
import styles from "./Card.module.css";
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
    <div className={styles.container}>
      <div className={styles.galleryWrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {close && <Button onlyIcon icon={<CloseIcon />} onClick={close} />}
        </div>
        <div className={styles.body}>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <div className={styles.galleryList}>{body}</div>
        </div>
        <div>{preBottom}</div>
        <div className={styles.buttonsContainer}>{bottom}</div>
      </div>
    </div>
  );
};
