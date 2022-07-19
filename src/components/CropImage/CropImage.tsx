import React, { FC, useCallback, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import getCroppedImg from "../../utils/crop";
import { Card } from "../Common/Card/Card";
import { Button } from "../Common/Button/Button";
import { ICropImage } from "../../interfaces/types.ts";

const CropImage: FC<ICropImage> = ({ imgUrl, setCropVisible, aspectRatio }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImg, setCroppedImg] = useState<any>(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const onCrop = async () => {
    const croppedImage: any = await getCroppedImg(imgUrl, croppedAreaPixels);
    const data = new FormData();
    data.append("file", croppedImage);
    setCroppedImg(croppedImage);
    console.log(croppedImg)
  };
  
  return (
    <Card
      title="Add an image"
      subtitle="Edit the image"
      close={() => setCropVisible(false)}
      body={
        <>
          <div className='ciCropContent'>
            <Cropper
              image={imgUrl}
              crop={crop}
              zoom={zoom}
              aspect={aspectRatio}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
        </>
      }
      preBottom={
        <div className='ciRangeContainer'>
          <input
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e: any) => {
              setZoom(e.target.value);
            }}
          />
        </div>
      }
      bottom={
        <div className='ciFooter'>
          <Button text="BACK" onClick={() => setCropVisible(false)} outline />
          <Button text="SAVE" onClick={onCrop} primary />
        </div>
      }
    />
  );
};

export default CropImage;
