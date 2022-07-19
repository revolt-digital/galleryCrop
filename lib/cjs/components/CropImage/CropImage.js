"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_easy_crop_1 = __importDefault(require("react-easy-crop"));
var crop_1 = __importDefault(require("../../utils/crop"));
var Card_1 = require("../Common/Card/Card");
var Button_1 = require("../Common/Button/Button");
var CropImage = function (_a) {
    var imgUrl = _a.imgUrl, setCropVisible = _a.setCropVisible, aspectRatio = _a.aspectRatio;
    var _b = (0, react_1.useState)({ x: 0, y: 0 }), crop = _b[0], setCrop = _b[1];
    var _c = (0, react_1.useState)(1), zoom = _c[0], setZoom = _c[1];
    var _d = (0, react_1.useState)(null), croppedAreaPixels = _d[0], setCroppedAreaPixels = _d[1];
    var _e = (0, react_1.useState)(null), croppedImg = _e[0], setCroppedImg = _e[1];
    var onCropComplete = (0, react_1.useCallback)(function (croppedArea, croppedAreaPixels) {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);
    var onCrop = function () { return __awaiter(void 0, void 0, void 0, function () {
        var croppedImage, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, crop_1.default)(imgUrl, croppedAreaPixels)];
                case 1:
                    croppedImage = _a.sent();
                    data = new FormData();
                    data.append("file", croppedImage);
                    setCroppedImg(croppedImage);
                    console.log(croppedImg);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(Card_1.Card, { title: "Add an image", subtitle: "Edit the image", close: function () { return setCropVisible(false); }, body: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: 'ciCropContent' },
                react_1.default.createElement(react_easy_crop_1.default, { image: imgUrl, crop: crop, zoom: zoom, aspect: aspectRatio, onCropChange: setCrop, onCropComplete: onCropComplete, onZoomChange: setZoom }))), preBottom: react_1.default.createElement("div", { className: 'ciRangeContainer' },
            react_1.default.createElement("input", { type: "range", value: zoom, min: 1, max: 3, step: 0.1, "aria-labelledby": "Zoom", onChange: function (e) {
                    setZoom(e.target.value);
                } })), bottom: react_1.default.createElement("div", { className: 'ciFooter' },
            react_1.default.createElement(Button_1.Button, { text: "BACK", onClick: function () { return setCropVisible(false); }, outline: true }),
            react_1.default.createElement(Button_1.Button, { text: "SAVE", onClick: onCrop, primary: true })) }));
};
exports.default = CropImage;
