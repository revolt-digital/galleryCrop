import React, { FC } from "react";
import CropImage from "./components/CropImage/cropImage";
import Gallery from "./components/Gallery/gallery";
import useGallery from "./hooks/useGallery";
import "./styles.css";
import { ImageType } from "./types";
export interface Props {
  deckid: string;
  aspectRatio: number;
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
  } = useGallery({ deckid });

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
      onSelect={onSelect}
    />
  );
};

export default GalleryCrop;
