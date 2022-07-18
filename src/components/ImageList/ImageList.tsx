import { FC } from "react";
import styles from "./ImageList.module.css";
import { IimageList } from "../../interfaces/types.ts";
import { Button } from "../Common/Button/Button";

const ImageList: FC<IimageList> = ({
  id,
  name,
  url,
  size,
  setImageSelected,
  setImageOpen,
  setCropVisible
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageDetails}>
        <img className={styles.thumbnail} src={url} alt="thumbnail" />
        <div className={styles.iconsContainer}>
        <Button text='VIEW' onClick={() => {setImageSelected(id); setImageOpen(true)}} transparent/> 
        <Button text='EDIT' onClick={() => {setImageSelected(id); setCropVisible(true)}} transparent/> 
        <Button text='DELETE' onClick={() => {setImageSelected(id); console.log(id)}} transparent/> 
      </div>
        <div className={styles.imageDetails}>
          <div className={styles.description}>
            <span className={styles.nameLabel}>Name: {name}</span>
            <span className={styles.sizeLabel}>Size: {size}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageList;
