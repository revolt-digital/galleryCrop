"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AddPhotoAlternate_1 = __importDefault(require("@mui/icons-material/AddPhotoAlternate"));
var UploadButton = function () {
    var onChange = function (e) {
        console.log(e.target.files[0]);
    };
    return (react_1.default.createElement("div", { className: 'ubContainer' },
        react_1.default.createElement("input", { onChange: onChange, type: "file", id: "file", style: { display: "none" } }),
        react_1.default.createElement("label", { htmlFor: "file" },
            react_1.default.createElement("span", null,
                react_1.default.createElement(AddPhotoAlternate_1.default, null),
                "UPLOAD IMAGE"))));
};
exports.default = UploadButton;
