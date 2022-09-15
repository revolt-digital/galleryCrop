import React, { useState, FC } from "react";
import { IGalleryCrop } from "./types";
import CropImage from "./components/cropImage";
import Gallery from "./components/gallery";
import { ImageView } from "./components/imageView";
import "./styles.css";
import useGallery from "./hooks/useGallery";

const GalleryCrop: FC<IGalleryCrop> = ({
  listOfImages,
  aspectRatio,
  maxWidth,
  maxWeight,
}) => {
  const [selected, setSelected] = useState<any>({
    fileName: "",
    url: "",
  });
  const { images, uploadImage, deleteImageById } = useGallery({ deckid: "1" });
  const [preview, setPreview] = useState<any>(null);
  const [cropVisible, setCropVisible] = useState<any>(null);

  const selectImage = (id: string) => {
    const element = images.find((img) => id === img.id);

    setSelected({
      fileName: element?.fileName,
      url: element?.url,
    });
  };

  return (
    <>
      {cropVisible ? (
        <CropImage
          url={selected.url}
          name={selected.fileName}
          aspectRatio={aspectRatio}
          setCropVisible={setCropVisible}
        />
      ) : preview ? (
        <ImageView imgUrl={selected.url} setIsVisible={setPreview} />
      ) : (
        <Gallery
          images={images}
          uploadImage={uploadImage}
          deleteImage={deleteImageById}
          setImageSelected={selectImage}
          setImageOpen={setPreview}
          setCropVisible={setCropVisible}
        />
      )}
    </>
  );
};

export default GalleryCrop;
