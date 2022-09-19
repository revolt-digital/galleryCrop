import classNames from "classnames";
import React, { FC } from "react";
import { SelectedImageType } from "../../types";
import Button from "../Common/Button/Button";

type Props = {
  id: number;
  fileName: string;
  url: string;
  deleteImage: (imageId: number) => Promise<void>;
  setEditImage: React.Dispatch<number>;
  setIsEdition: React.Dispatch<boolean>;
  imageSelected: SelectedImageType | null;
  setImageSelected: React.Dispatch<SelectedImageType | null>;
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

  const handleDelete = async () => {
    await deleteImage(id);
    setImageSelected(null);
  }

  return (
    <div
      className={classNames("image-container", {
        "image-selected": imageSelected?.id === id,
      })}
      onClick={handleSelected}
    >
      <img className="image-thumbnail" src={url} alt="" />
      <div className="buttons-wrapper">
        <div className="icon-container">
          <Button
            text="edit"
            transparent
            onClick={() => {
              setEditImage(id);
              setIsEdition(true);
            }}
          />
          <span className="divider" />
          <Button text="delete" onClick={handleDelete} transparent />
        </div>
        <div className="image-description text-ellipsis">
          <span className="image-name-label">{fileName}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
