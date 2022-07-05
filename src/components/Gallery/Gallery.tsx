import { FC } from "react";
import { IGallery } from "../../interfaces/types.ts";
import Card from "../CardList/CardList";
import InputFile from "../InputFile/InputFile";
import styles from "./Gallery.module.css";

const Gallery: FC<IGallery> = ({ data, setImageSelected, setImageOpen, setCropVisible }) => {
  return (
    <div className={styles.container}>
      <div className={styles.galleryWrapper}>
        <h3 className={styles.title}>GALLERY</h3>
        <div className={styles.galleryList}>
          {data.map((item) => (
            <Card {...item} setImageSelected={setImageSelected} setImageOpen={setImageOpen} setCropVisible={setCropVisible}/>
          ))}
        </div>
        <div className={styles.buttonsContainer}>
          <InputFile />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
