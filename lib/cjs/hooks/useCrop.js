"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCrop = function () {
    var _a = (0, react_1.useState)(1), zoom = _a[0], setZoom = _a[1];
    var _b = (0, react_1.useState)(), croppedArea = _b[0], setCroppedArea = _b[1];
    var _c = (0, react_1.useState)({ x: 0, y: 0 }), crop = _c[0], setCrop = _c[1];
    var onCropComplete = function (_, croppedAreaPixels) {
        setCroppedArea(croppedAreaPixels);
    };
    return {
        crop: crop,
        setCrop: setCrop,
        zoom: zoom,
        setZoom: setZoom,
        onCropComplete: onCropComplete,
        croppedArea: croppedArea,
    };
};
exports.default = useCrop;
