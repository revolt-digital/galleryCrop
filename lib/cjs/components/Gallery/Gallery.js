"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ImageList_1 = __importDefault(require("../ImageList/ImageList"));
var Card_1 = require("../Common/Card/Card");
var Button_1 = require("../Common/Button/Button");
var Gallery = function (_a) {
    var data = _a.data, setImageSelected = _a.setImageSelected, setImageOpen = _a.setImageOpen, setCropVisible = _a.setCropVisible;
    return (react_1.default.createElement(Card_1.Card, { title: "Add an image", subtitle: "Select an image from the library", body: data.map(function (item, i) { return (react_1.default.createElement(ImageList_1.default, __assign({ key: i }, item, { setImageSelected: setImageSelected, setImageOpen: setImageOpen, setCropVisible: setCropVisible }))); }), bottom: react_1.default.createElement("div", { className: 'gFooter' },
            react_1.default.createElement(Button_1.Button, { text: "UPLOAD IMAGE", primary: true })) }));
};
exports.default = Gallery;
