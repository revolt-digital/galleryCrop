import { FC, useCallback, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import getCroppedImg from "../../utils/crop";
import styles from "./CropImage.module.css";
import { Card } from "../Common/Card/Card";
import { Button } from "../Common/Button/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
  };
  
  return (
    <Card
      title="Add an image"
      subtitle="Edit the image"
      close={() => setCropVisible(false)}
      body={
        <>
          <div className={styles.cropContent}>
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
        <div className={styles.rangeContainer}>
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
        <div className={styles.footer}>
          <Button icon={<ArrowBackIosIcon/>} text="BACK" onClick={() => setCropVisible(false)} outline />
          <Button text="SAVE" onClick={onCrop} primary />
        </div>
      }
    />
  );
};

export default CropImage;
