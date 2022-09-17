import React, { FC, useEffect } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImageCard from "../imageCard";
import { Button, Card, FileButton } from "../common";
import { ImageType, SelectedImageType } from "../../types";

type Props = {
  images: ImageType[];
  setEditImage: React.Dispatch<number>;
  setIsEdition: React.Dispatch<boolean>;
  uploadImage: (files: File, type: number) => Promise<void>;
  getImages: () => Promise<void>;
  deleteImage: (id: number) => void;
  imageSelected: SelectedImageType | undefined;
  setImageSelected: React.Dispatch<SelectedImageType | undefined>;
  onSelect: (image: SelectedImageType) => void;
};

const Gallery: FC<Props> = ({
  images,
  uploadImage,
  deleteImage,
  setEditImage,
  setIsEdition,
  getImages,
  imageSelected,
  setImageSelected,
  onSelect
}) => {
  const handleUpload = async (event: React.ChangeEvent<any>) => {
    const file = event.target.files[0];
    await uploadImage(file, 0);
  };

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <Card
      title="Select an image from the library"
      buttons={
        <div className="gallery-button">
          <Button text="confirm" disabled={!imageSelected} primary onClick={() => onSelect(imageSelected!)} />
          <FileButton
            text="upload from your device"
            icon={<AddPhotoAlternateIcon />}
            outline
            onChange={(event) => handleUpload(event)}
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
              imageSelected={imageSelected}
              setImageSelected={setImageSelected} 
            />
          ))}
      </div>
    </Card>
  );
};

export default Gallery;
