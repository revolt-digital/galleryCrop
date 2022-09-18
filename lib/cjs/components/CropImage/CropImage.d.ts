import React, { FC } from "react";
declare type Props = {
    deckid: string;
    uploadImage: (file: any, type: number) => Promise<void>;
    uploadImageLoading: boolean;
    url: string;
    name: string;
    setIsEdition: React.Dispatch<boolean>;
    aspectRatio: number;
};
declare const CropImage: FC<Props>;
export default CropImage;
