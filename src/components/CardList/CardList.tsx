import { FC } from "react";
import styles from "./CardList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CropIcon from "@mui/icons-material/Crop";
import { ICardList } from "../../interfaces/types.ts";

const CardList: FC<ICardList> = ({
  id,
  name,
  url,
  size,
  extension,
  setImageSelected,
  setImageOpen,
  setCropVisible
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageDetails}>
        <img className={styles.thumbnail} src={url} alt="thumbnail" />
        <div className={styles.imageDetails}>
          <div className={styles.description}>
            <span>Name: {name}</span>
            <span>Size: {size}</span>
            <span>Extension: {extension}</span>
          </div>
        </div>
      </div>
      <div className={styles.iconsContainer}>
        <CropIcon onClick={() => {setImageSelected(id); setCropVisible(true)}} />
        <OpenInFullIcon onClick={() => { setImageSelected(id); setImageOpen(true)}} />
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CardList;
