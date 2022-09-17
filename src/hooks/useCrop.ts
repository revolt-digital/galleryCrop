import { useState } from "react";
import { Area, Point } from "react-easy-crop";

const useCrop = () => {
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area>();
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });

  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  };

  return {
    crop,
    setCrop,
    zoom,
    setZoom,
    onCropComplete,
    croppedArea,
  };
};

export default useCrop;
