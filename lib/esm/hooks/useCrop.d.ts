/// <reference types="react" />
import { Area, Point } from "react-easy-crop";
declare const useCrop: () => {
    crop: Point;
    setCrop: import("react").Dispatch<import("react").SetStateAction<Point>>;
    zoom: number;
    setZoom: import("react").Dispatch<import("react").SetStateAction<number>>;
    onCropComplete: (_: Area, croppedAreaPixels: Area) => void;
    croppedArea: Area | undefined;
};
export default useCrop;
