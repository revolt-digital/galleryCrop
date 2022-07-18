import { FC } from "react";
import { IGallery } from "../../interfaces/types.ts";
import CardList from "../ImageList/ImageList";
import styles from "./Gallery.module.css";
import { Card } from "../Common/Card/Card";
import { Button } from "../Common/Button/Button";

const Gallery: FC<IGallery> = ({
  data,
  setImageSelected,
  setImageOpen,
  setCropVisible,
}) => {
  return (
    <Card
      title="Add an image"
      subtitle="Select an image from the library"
      body={data.map((item, i) => (
        <CardList
          key={i}
          {...item}
          setImageSelected={setImageSelected}
          setImageOpen={setImageOpen}
          setCropVisible={setCropVisible}
        />
      ))}
      bottom={
        <div className={styles.footer}>
          <Button text="UPLOAD IMAGE" primary/>
        </div>
      }
    />
  );
};

export default Gallery;
