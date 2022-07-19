"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = require("../Common/Button/Button");
var ImageList = function (_a) {
    var id = _a.id, name = _a.name, url = _a.url, size = _a.size, setImageSelected = _a.setImageSelected, setImageOpen = _a.setImageOpen, setCropVisible = _a.setCropVisible;
    return (react_1.default.createElement("div", { className: 'ilContainer' },
        react_1.default.createElement("div", { className: 'ilImageDetails' },
            react_1.default.createElement("img", { className: 'ilThumbnail', src: url, alt: "thumbnail" }),
            react_1.default.createElement("div", { className: 'ilIconsContainer' },
                react_1.default.createElement(Button_1.Button, { text: 'VIEW', onClick: function () { setImageSelected(id); setImageOpen(true); }, transparent: true }),
                react_1.default.createElement(Button_1.Button, { text: 'EDIT', onClick: function () { setImageSelected(id); setCropVisible(true); }, transparent: true }),
                react_1.default.createElement(Button_1.Button, { text: 'DELETE', onClick: function () { setImageSelected(id); console.log(id); }, transparent: true })),
            react_1.default.createElement("div", { className: 'ilImageDetails' },
                react_1.default.createElement("div", { className: 'ilDescription' },
                    react_1.default.createElement("span", { className: 'ilNameLabel' },
                        "Name: ",
                        name),
                    react_1.default.createElement("span", { className: 'ilSizeLabel' },
                        "Size: ",
                        size))))));
};
exports.default = ImageList;
