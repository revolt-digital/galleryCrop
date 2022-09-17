import classNames from "classnames";
import React, { FC } from "react";
import { SelectedImageType } from "../../types";
import { Button } from "../common";

type Props = {
  id: number;
  fileName: string;
  url: string;
  deleteImage: (id: number) => void;
  setEditImage: React.Dispatch<number>;
  setIsEdition: React.Dispatch<boolean>;
  imageSelected: SelectedImageType | undefined;
  setImageSelected: React.Dispatch<SelectedImageType | undefined>;
};

const ImageCard: FC<Props> = ({
  id,
  fileName,
  url,
  deleteImage,
  setEditImage,
  setIsEdition,
  imageSelected,
  setImageSelected
}) => {
  const handleSelected = () => {
    setImageSelected({ url, id, fileName });
  };

  return (
    <div
      className={classNames("image-container", {
        "image-selected": imageSelected?.id === id,
      })}
      onClick={handleSelected}
    >
      <img className="image-thumbnail" src={url} alt="" />
      <div className="image-wrapper">
        <div className="icon-container">
          <Button
            text="edit"
            transparent
            onClick={() => {
              setEditImage(id);
              setIsEdition(true);
            }}
          />
          <Button text="delete" onClick={() => deleteImage(id)} transparent />
        </div>
        <div className="image-description">
          <span className="image-name-label">{fileName}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
