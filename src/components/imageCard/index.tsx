import React, { FC } from "react";
import { Button } from "../common";

type Props = {
  id: number;
  fileName: string;
  url: string;
  setEditImage: React.Dispatch<any>;
  deleteImage: (id: number) => void;
  setIsEdition : React.Dispatch<boolean>;
}

const ImageCard: FC<Props> = ({
  id,
  fileName,
  url,
  deleteImage,
  setEditImage,
  setIsEdition,
}) => {
  return (
    <div className="image-container">
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
          <Button
            text="delete"
            onClick={() => deleteImage(id)}
            transparent
          />
        </div>
        <div className="image-description">
          <span className="image-name-label">{fileName}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
