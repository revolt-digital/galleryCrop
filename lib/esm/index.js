import React, { useState } from "react";
import CropImage from "./components/CropImage/CropImage";
import Gallery from "./components/Gallery/Gallery";
import { ImageView } from "./components/ImageView/ImageView";
import './styles.css';
var GalleryCrop = function (_a) {
    var listOfImages = _a.listOfImages, aspectRatio = _a.aspectRatio, maxWidth = _a.maxWidth, maxWeight = _a.maxWeight;
    var _b = useState(null), imageSelected = _b[0], setImageSelected = _b[1];
    var _c = useState(null), imgVisible = _c[0], setImgVisible = _c[1];
    var _d = useState(null), cropVisible = _d[0], setCropVisible = _d[1];
    var selected = function (id) {
        var selectedImage = listOfImages.find(function (img) { return id === img.id; });
        setImageSelected(selectedImage === null || selectedImage === void 0 ? void 0 : selectedImage.url);
    };
    return (React.createElement(React.Fragment, null, cropVisible ? (React.createElement(CropImage, { imgUrl: imageSelected, aspectRatio: aspectRatio, setCropVisible: setCropVisible })) : (imgVisible ?
        React.createElement(ImageView, { imgUrl: imageSelected, setIsVisible: setImgVisible })
        :
            React.createElement(Gallery, { data: listOfImages, setImageSelected: selected, setImageOpen: setImgVisible, setCropVisible: setCropVisible }))));
};
export default GalleryCrop;
