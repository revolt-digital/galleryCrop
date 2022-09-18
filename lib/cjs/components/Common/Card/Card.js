"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card = function (_a) {
    var title = _a.title, children = _a.children, buttons = _a.buttons;
    return (react_1.default.createElement("div", { className: "gallery-wrapper" },
        react_1.default.createElement("div", { className: "card-body" },
            react_1.default.createElement("h4", { className: "card-title" }, title),
            children),
        react_1.default.createElement("div", { className: "card-button-container" }, buttons)));
};
exports.default = Card;
