import React, { FC } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg, normalizeFilename } from "../../utils";
import { Button, Card, InputRange } from "../common";
import useGallery from "../../hooks/useGallery";
import useCrop from "../../hooks/useCrop";

type Props = {
  deckid: string;
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
}) => {
  const { uploadImage } = useGallery({ deckid });
  const { zoom, setZoom, crop, setCrop, croppedArea, onCropComplete } =
  useCrop();

  const onCrop = async () => {
    const filename = normalizeFilename(deckid, name);

    const croppedImage = await getCroppedImg(
      url,
      filename,
      croppedArea
    );

    await uploadImage(croppedImage, 1);
  };

  return (
    <Card
      title="Edit the image"
      buttons={
        <div className="crop-image-footer">
          <Button text="back" outline onClick={() => setIsEdition(false)} />
          <Button text="save" primary onClick={onCrop} />
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
