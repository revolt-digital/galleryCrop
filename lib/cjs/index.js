"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var cropImage_1 = __importDefault(require("./components/CropImage/cropImage"));
var gallery_1 = __importDefault(require("./components/Gallery/gallery"));
var useGallery_1 = __importDefault(require("./hooks/useGallery"));
require("./styles.css");
var GalleryCrop = function (_a) {
    var deckid = _a.deckid, aspectRatio = _a.aspectRatio, onSelect = _a.onSelect;
    var _b = (0, useGallery_1.default)({ deckid: deckid }), images = _b.images, uploadImage = _b.uploadImage, uploadImageLoading = _b.uploadImageLoading, deleteImage = _b.deleteImage, currentImage = _b.currentImage, isEdition = _b.isEdition, setIsEdition = _b.setIsEdition, setEditImage = _b.setEditImage, getImages = _b.getImages, imageSelected = _b.imageSelected, setImageSelected = _b.setImageSelected;
    if (isEdition) {
        return (react_1.default.createElement(cropImage_1.default, { deckid: deckid, uploadImage: uploadImage, uploadImageLoading: uploadImageLoading, url: currentImage === null || currentImage === void 0 ? void 0 : currentImage.url, name: currentImage === null || currentImage === void 0 ? void 0 : currentImage.fileName, aspectRatio: aspectRatio, setIsEdition: setIsEdition }));
    }
    return (react_1.default.createElement(gallery_1.default, { images: images, uploadImage: uploadImage, uploadImageLoading: uploadImageLoading, deleteImage: deleteImage, setEditImage: setEditImage, setIsEdition: setIsEdition, getImages: getImages, imageSelected: imageSelected, setImageSelected: setImageSelected, onSelect: onSelect }));
};
exports.default = GalleryCrop;
