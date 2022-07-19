"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageView = void 0;
var react_1 = __importDefault(require("react"));
var Card_1 = require("../Common/Card/Card");
var Button_1 = require("../Common/Button/Button");
var ImageView = function (_a) {
    var imgUrl = _a.imgUrl, setIsVisible = _a.setIsVisible;
    return (react_1.default.createElement(Card_1.Card, { title: "VIEW", body: react_1.default.createElement("div", { className: 'ivView' },
            react_1.default.createElement("img", { src: imgUrl, alt: "" })), bottom: react_1.default.createElement(Button_1.Button, { text: "BACK", onClick: function () { return setIsVisible(false); }, outline: true }), close: function () { return setIsVisible(false); } }));
};
exports.ImageView = ImageView;
