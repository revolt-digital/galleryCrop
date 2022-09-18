/// <reference types="react" />
import { ImageType, SelectedImageType } from "../types";
declare type Props = {
    deckid: string;
};
declare const useGallery: ({ deckid }: Props) => {
    images: ImageType[];
    imageSelected: SelectedImageType | null;
    setImageSelected: import("react").Dispatch<import("react").SetStateAction<SelectedImageType | null>>;
    isEdition: boolean;
    uploadImage: (file: any, type: number) => Promise<void>;
    uploadImageLoading: boolean;
    getImages: () => Promise<void>;
    deleteImage: (imageId: number) => Promise<void>;
    setEditImage: (id: number) => void;
    setIsEdition: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    currentImage: ImageType | null;
    setCurrentImage: import("react").Dispatch<import("react").SetStateAction<ImageType | null>>;
};
export default useGallery;
