import React, { FC } from "react";
import CropImage from "./components/CropImage/CropImage";
import Gallery from "./components/Gallery/Gallery";
import useGallery from "./hooks/useGallery";
import "./styles.css";
import { ImageType } from "./types";
export interface Props {
  deckid: string;
  aspectRatio: string;
  onSelect: (image: ImageType) => void;
}

const GalleryCrop: FC<Props> = ({ deckid, aspectRatio, onSelect }) => {
  const {
    images,
    uploadImage,
    uploadImageLoading,
    deleteImage,
    currentImage,
    isEdition,
    setIsEdition,
    setEditImage,
    getImages,
    imageSelected,
    setImageSelected,
  } = useGallery({ deckid, aspectRatio });

  if (isEdition) {
    return (
      <CropImage
        deckid={deckid}
        uploadImage={uploadImage}
        uploadImageLoading={uploadImageLoading}
        url={currentImage?.url!}
        name={currentImage?.fileName!}
        aspectRatio={aspectRatio}
        setIsEdition={setIsEdition}
      />
    );
  }

  return (
    <Gallery
      images={images}
      uploadImage={uploadImage}
      uploadImageLoading={uploadImageLoading}
      deleteImage={deleteImage}
      setEditImage={setEditImage}
      setIsEdition={setIsEdition}
      getImages={getImages}
      imageSelected={imageSelected}
      setImageSelected={setImageSelected}
      aspectRatio={aspectRatio}
      onSelect={onSelect}
    />
  );
};

export default GalleryCrop;
