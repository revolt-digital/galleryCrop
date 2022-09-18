import React from "react";
import CropImage from "./components/CropImage/CropImage";
import Gallery from "./components/Gallery/Gallery";
import useGallery from "./hooks/useGallery";
import "./styles.css";
var GalleryCrop = function (_a) {
    var deckid = _a.deckid, aspectRatio = _a.aspectRatio, onSelect = _a.onSelect;
    var _b = useGallery({ deckid: deckid }), images = _b.images, uploadImage = _b.uploadImage, uploadImageLoading = _b.uploadImageLoading, deleteImage = _b.deleteImage, currentImage = _b.currentImage, isEdition = _b.isEdition, setIsEdition = _b.setIsEdition, setEditImage = _b.setEditImage, getImages = _b.getImages, imageSelected = _b.imageSelected, setImageSelected = _b.setImageSelected;
    if (isEdition) {
        return (React.createElement(CropImage, { deckid: deckid, uploadImage: uploadImage, uploadImageLoading: uploadImageLoading, url: currentImage === null || currentImage === void 0 ? void 0 : currentImage.url, name: currentImage === null || currentImage === void 0 ? void 0 : currentImage.fileName, aspectRatio: aspectRatio, setIsEdition: setIsEdition }));
    }
    return (React.createElement(Gallery, { images: images, uploadImage: uploadImage, uploadImageLoading: uploadImageLoading, deleteImage: deleteImage, setEditImage: setEditImage, setIsEdition: setIsEdition, getImages: getImages, imageSelected: imageSelected, setImageSelected: setImageSelected, onSelect: onSelect }));
};
export default GalleryCrop;
