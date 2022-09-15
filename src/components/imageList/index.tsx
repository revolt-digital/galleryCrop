import React, { FC } from "react";
import { IimageList } from "../../types";
import { Button } from "../common/button";

const ImageList: FC<IimageList> = ({
  id,
  fileName,
  url,
  size,
  deleteImage,
  setImageSelected,
  setCropVisible,
}) => {
  return (
    <div className="image-container">
      <img className="image-thumbnail" src={url} alt="thumbnail" />
      <div className="image-list-wrapper">
        <div className="icon-container">
          <Button
            text="EDIT"
            onClick={() => {
              setImageSelected(id);
              setCropVisible(true);
            }}
            transparent
          />
          <span>|</span>
          <Button
            text="DELETE"
            onClick={() => {
              deleteImage(id);
            }}
            transparent
          />
        </div>
        <div className="image-list-description">
          <span className="image-list-name-label">{fileName}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageList;
