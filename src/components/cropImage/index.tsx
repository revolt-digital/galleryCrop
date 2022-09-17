import React, { FC } from "react";
import Cropper from "react-easy-crop";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, Card, InputRange, Spinner } from "../common";
import useCrop from "../../hooks/useCrop";
import { getCroppedImg, normalizeFilename } from "../../utils";

type Props = {
  deckid: string;
  uploadImage: (file: any, type: number) => Promise<void>;
  uploadImageLoading: boolean;
  url: string;
  name: string;
  setIsEdition: React.Dispatch<boolean>;
  aspectRatio: number;
};

const CropImage: FC<Props> = ({
  deckid,
  url,
  name,
  setIsEdition,
  aspectRatio,
  uploadImage,
  uploadImageLoading,
}) => {
  const { zoom, setZoom, crop, setCrop, croppedArea, onCropComplete } =
    useCrop();

  const onCrop = async () => {
    const filename = normalizeFilename(deckid, name);
    const croppedImage = await getCroppedImg(url, filename, croppedArea);

    await uploadImage(croppedImage, 1);
    setIsEdition(false);
  };

  return (
    <Card
      title="Edit the image"
      buttons={
        <div className="crop-image-footer">
          <Button
            text="back"
            outline
            icon={<ArrowBackIosIcon />}
            onClick={() => setIsEdition(false)}
          />
          <Button
            text="save"
            icon={uploadImageLoading && <Spinner />}
            disabled={uploadImageLoading}
            primary
            onClick={onCrop}
          />
        </div>
      }
    >
      <>
        <div className="crop-container">
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
        <div className="crop-image-range-container">
          <InputRange value={zoom} onChange={setZoom} />
        </div>
      </>
    </Card>
  );
};

export default CropImage;
