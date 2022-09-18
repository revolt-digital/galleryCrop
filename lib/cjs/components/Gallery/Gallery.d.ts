import React, { FC } from "react";
import { ImageType, SelectedImageType } from "../../types";
declare type Props = {
    images: ImageType[];
    setEditImage: React.Dispatch<number>;
    setIsEdition: React.Dispatch<boolean>;
    uploadImage: (files: File, type: number) => Promise<void>;
    uploadImageLoading: boolean;
    getImages: () => Promise<void>;
    deleteImage: (imageId: number) => Promise<void>;
    imageSelected: SelectedImageType | null;
    setImageSelected: React.Dispatch<SelectedImageType | null>;
    onSelect: (image: SelectedImageType) => void;
};
declare const Gallery: FC<Props>;
export default Gallery;
