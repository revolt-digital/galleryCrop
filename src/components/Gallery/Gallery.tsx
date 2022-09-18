import React, { FC, useEffect } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImageCard from "../ImageCard/ImageCard";
import Card from "../Common/Card/Card";
import Button from "../Common/Button/Button";
import FileButton from "../Common/FileButton/FileButton";
import Spinner from "../Common/Spinner/Spinner";
import { ImageType, SelectedImageType } from "../../types";

type Props = {
  images: ImageType[];
  setEditImage: React.Dispatch<number>;
  setIsEdition: React.Dispatch<boolean>;
  uploadImage: (files: File, type: number) => Promise<void>;
  uploadImageLoading: boolean;
  getImages: () => Promise<void>;
  deleteImage: (imageId: number) => Promise<void>;
  imageSelected: SelectedImageType | null;
  setImageSelected: React.Dispatch<SelectedImageType | null>;
  onSelect: (image: SelectedImageType) => void;
};

const Gallery: FC<Props> = ({
  images,
  uploadImage,
  uploadImageLoading,
  deleteImage,
  setEditImage,
  setIsEdition,
  getImages,
  imageSelected,
  setImageSelected,
  onSelect,
}) => {
  const handleUpload = async (event: React.ChangeEvent<any>) => {
    if (uploadImageLoading) return;

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
          <Button
            text="confirm"
            disabled={!imageSelected}
            primary
            onClick={() => onSelect(imageSelected!)}
          />
          <FileButton
            text="upload from your device"
            icon={
              uploadImageLoading ? <Spinner solid /> : <AddPhotoAlternateIcon />
            }
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
