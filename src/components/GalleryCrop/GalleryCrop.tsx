import { useState, FC } from "react";
import { IGalleryCrop } from "../../interfaces/types.ts";
import CropImage from "../CropImage/CropImage";
import Gallery from "../Gallery/Gallery";
import { ImageView } from "../ImageView/ImageView";

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
      <Gallery
        data={listOfImages}
        setImageSelected={selected}
        setImageOpen={setImgVisible}
        setCropVisible={setCropVisible}
      />
      {imgVisible && (
        <ImageView imgUrl={imageSelected} setIsVisible={setImgVisible} />
      )}
      {cropVisible && (
        <CropImage imgUrl={imageSelected} aspectRatio={aspectRatio} setCropVisible={setCropVisible}/>
      )}
    </>
  );
};

export default GalleryCrop;
