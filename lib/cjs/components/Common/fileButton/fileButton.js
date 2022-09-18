"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var FileButton = function (_a) {
    var text = _a.text, outline = _a.outline, transparent = _a.transparent, primary = _a.primary, icon = _a.icon, onChange = _a.onChange;
    return (react_1.default.createElement("label", { className: (0, classnames_1.default)("button", { "button-outline": outline }, { "button-transparent": transparent }, { "button-primary": primary }) },
        react_1.default.createElement("input", { onChange: onChange, type: "file", accept: "image/png, image/gif, image/jpeg, image/jpg" }),
        react_1.default.createElement("span", { className: "file-button-text" },
            !!icon && icon,
            !!text && text)));
};
exports.default = FileButton;
