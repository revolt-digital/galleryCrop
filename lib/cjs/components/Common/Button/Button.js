"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Button = function (_a) {
    var text = _a.text, onClick = _a.onClick, icon = _a.icon, outline = _a.outline, primary = _a.primary, onlyIcon = _a.onlyIcon, transparent = _a.transparent;
    return (react_1.default.createElement("button", { className: (0, classnames_1.default)('btnButton', { 'btnOutline': outline }, { 'btnTransparent': transparent }, { 'btnPrimary': primary }, { 'btnIcon': onlyIcon }), onClick: onClick },
        react_1.default.createElement(react_1.default.Fragment, null,
            icon,
            text)));
};
exports.Button = Button;
