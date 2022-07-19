import React,{ useState, FC } from "react";
import { IGalleryCrop } from "./interfaces/types.ts";
import CropImage from "./components/CropImage/CropImage";
import Gallery from "./components/Gallery/Gallery";
import { ImageView } from "./components/ImageView/ImageView";
import './styles.css';

const GalleryCrop: FC<IGalleryCrop> = ({
  listOfImages,
  aspectRatio,
  maxWidth,
  maxWeight,
}) => {
  const [imageSelected, setImageSelected] = useState<any>(null);
  const [imgVisible, setImgVisible] = useState<any>(null);
  const [cropVisible, setCropVisible] = useState<any>(null);

  const selected = (id: any) => {
    const selectedImage = listOfImages.find((img) => id === img.id);
    setImageSelected(selectedImage?.url);
  };

  return (
    <>
      {cropVisible ? (
        <CropImage
          imgUrl={imageSelected}
          aspectRatio={aspectRatio}
          setCropVisible={setCropVisible}
        />
      ) : (
        imgVisible ? 
          <ImageView imgUrl={imageSelected} setIsVisible={setImgVisible} />
        :
        <Gallery
          data={listOfImages}
          setImageSelected={selected}
          setImageOpen={setImgVisible}
          setCropVisible={setCropVisible}
        />
      )}
    </>
  );
};

export default GalleryCrop;
