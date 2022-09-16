import React, { FC } from "react";
import ImageCard from "../imageCard";
import { Card, FileButton } from "../common";
import { ImageType } from "../../types";

type Props = {
  images: ImageType[];
  uploadImage: (files: File, type: number) => Promise<void>;
  setEditImage: React.Dispatch<any>;
  deleteImage: (id: number) => void;
  setIsEdition: React.Dispatch<boolean>;
};

const Gallery: FC<Props> = ({
  images,
  uploadImage,
  deleteImage,
  setEditImage,
  setIsEdition,
}) => {
  const handleUploadImage = async (event: React.ChangeEvent<any>) => {
    const file = event.target.files[0];
    await uploadImage(file, 0);
  };

  return (
    <Card
      title="Select an image from the library"
      buttons={
        <div className="gallery-button">
          <FileButton
            text="upload image"
            onChange={(event) => handleUploadImage(event)}
          />
        </div>
      }
    >
      <div className="grid-images">
        {!!images.length &&
          images?.map((item, i) => (
            <ImageCard
              key={i}
              {...item}
              setEditImage={setEditImage}
              deleteImage={deleteImage}
              setIsEdition={setIsEdition}
            />
          ))}
      </div>
    </Card>
  );
};

export default Gallery;
