import React, { FC } from "react";
import { SelectedImageType } from "../../types";
declare type Props = {
    id: number;
    fileName: string;
    url: string;
    deleteImage: (imageId: number) => Promise<void>;
    setEditImage: React.Dispatch<number>;
    setIsEdition: React.Dispatch<boolean>;
    imageSelected: SelectedImageType | null;
    setImageSelected: React.Dispatch<SelectedImageType | null>;
};
declare const ImageCard: FC<Props>;
export default ImageCard;
