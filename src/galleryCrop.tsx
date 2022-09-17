import React, { FC } from "react";
import CropImage from "./components/cropImage";
import Gallery from "./components/gallery";
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
