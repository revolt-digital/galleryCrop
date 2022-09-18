"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Button = function (_a) {
    var text = _a.text, outline = _a.outline, onlyIcon = _a.onlyIcon, transparent = _a.transparent, primary = _a.primary, icon = _a.icon, disabled = _a.disabled, onClick = _a.onClick;
    return (react_1.default.createElement("button", { className: (0, classnames_1.default)("button", { "button-outline": outline }, { "button-transparent": transparent }, { "button-primary": primary }, { "button-icon": onlyIcon }), onClick: onClick, disabled: disabled },
        react_1.default.createElement(react_1.default.Fragment, null,
            !!icon && icon,
            !!text && text)));
};
exports.default = Button;
