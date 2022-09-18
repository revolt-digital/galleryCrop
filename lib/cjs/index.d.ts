import { FC } from "react";
import "./styles.css";
import { ImageType } from "./types";
export interface Props {
    deckid: string;
    aspectRatio: number;
    onSelect: (image: ImageType) => void;
}
declare const GalleryCrop: FC<Props>;
export default GalleryCrop;
