import React, { FC } from "react";
import CropImage from "./components/cropImage";
import Gallery from "./components/gallery";
import useGallery from "./hooks/useGallery";
import "./styles.css";
export interface Props {
  aspectRatio: number;
  onSelect: (image: string) => void;
}

const GalleryCrop: FC<Props> = ({ aspectRatio, onSelect }) => {
  const {
    images,
    uploadImage,
    deleteImage,
    imageSelected,
    isEdition,
    setIsEdition,
    setEditImage,
  } = useGallery({ deckid: "1" });

  if (isEdition) {
    return (
      <CropImage
        deckid="1"
        url={imageSelected.url}
        name={imageSelected.fileName}
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
    />
  );
};

export default GalleryCrop;
