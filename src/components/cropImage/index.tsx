import React, { FC, useCallback, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import { getCroppedImg } from "../../utils";
import { Card } from "../common/card";
import { Button } from "../common/button";
import { ICropImage } from "../../types";
import useGallery from "../../hooks/useGallery";

const CropImage: FC<ICropImage> = ({ url, name, setCropVisible, aspectRatio }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const { uploadImage } = useGallery({ deckid: "1" });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const onCrop = async () => {
    const croppedImage = await getCroppedImg(url, name, croppedAreaPixels);

    /*
     let newUrl  = window.URL.createObjectURL(croppedImage);
    window.location.assign(newUrl);
    console.log(croppedImage);
    */
    await uploadImage(croppedImage, 0);
  };

  return (
    <Card
      title="Add an image"
      subtitle="Edit the image"
      close={() => setCropVisible(false)}
      preBottom={
        <div className="crop-image-range-container">
          <input
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e) => setZoom(+e.target.value)}
          />
        </div>
      }
      bottom={
        <div className="crop-image-footer">
          <Button text="BACK" onClick={() => setCropVisible(false)} outline />
          <Button text="SAVE" onClick={onCrop} primary />
        </div>
      }
    >
      <div className="card-gallery-list">
        <div className="crop-image-container">
          <Cropper
            image={url}
            crop={crop}
            zoom={zoom}
            aspect={aspectRatio}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
      </div>
    </Card>
  );
};

export default CropImage;
