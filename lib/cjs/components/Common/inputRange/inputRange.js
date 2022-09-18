"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var InputRange = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (react_1.default.createElement("input", { type: "range", value: value, min: 1, max: 3, step: 0.1, onChange: function (e) { return onChange(+e.target.value); } }));
};
exports.default = InputRange;
