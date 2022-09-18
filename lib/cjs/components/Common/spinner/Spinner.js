"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Spinner = function (_a) {
    var solid = _a.solid;
    return (react_1.default.createElement("span", { className: (0, classnames_1.default)("loader", {
            "loader-solid": solid
        }) }));
};
exports.default = Spinner;
