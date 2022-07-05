import { FC, useCallback, useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import getCroppedImg from "../../utils/crop";
import styles from "./CropImage.module.css";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  imgUrl: string;
  aspectRatio: number;
  setCropVisible: any;
}

const CropImage: FC<Props> = ({ imgUrl, aspectRatio, setCropVisible }) => {
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
    setCroppedImg(croppedImage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <CloseIcon onClick={() => setCropVisible(false)} />
          <h3 className={styles.title}>CROP</h3>
        </div>
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
        <div className={styles.buttonsContainer}>
          <button onClick={onCrop}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default CropImage;
