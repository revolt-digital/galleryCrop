"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = require("../Button/Button");
var Card = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, body = _a.body, preBottom = _a.preBottom, bottom = _a.bottom, close = _a.close;
    return (react_1.default.createElement("div", { className: 'cContainer' },
        react_1.default.createElement("div", { className: 'cGalleryWrapper' },
            react_1.default.createElement("div", { className: 'cHeader' },
                react_1.default.createElement("h3", { className: 'cTitle' }, title),
                close && react_1.default.createElement(Button_1.Button, { onlyIcon: true, onClick: close })),
            react_1.default.createElement("div", { className: 'cBody' },
                react_1.default.createElement("h4", { className: 'cSubtitle' }, subtitle),
                react_1.default.createElement("div", { className: 'cGalleryList' }, body)),
            react_1.default.createElement("div", null, preBottom),
            react_1.default.createElement("div", { className: 'cButtonsContainer' }, bottom))));
};
exports.Card = Card;
