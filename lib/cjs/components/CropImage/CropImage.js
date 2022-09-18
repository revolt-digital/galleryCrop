"use strict";
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
var react_1 = __importDefault(require("react"));
var react_easy_crop_1 = __importDefault(require("react-easy-crop"));
var ArrowBackIos_1 = __importDefault(require("@mui/icons-material/ArrowBackIos"));
var card_1 = __importDefault(require("../Common/Card/card"));
var button_1 = __importDefault(require("../Common/Button/button"));
var Spinner_1 = __importDefault(require("../Common/Spinner/Spinner"));
var inputRange_1 = __importDefault(require("../Common/InputRange/inputRange"));
var useCrop_1 = __importDefault(require("../../hooks/useCrop"));
var utils_1 = require("../../utils");
var CropImage = function (_a) {
    var deckid = _a.deckid, url = _a.url, name = _a.name, setIsEdition = _a.setIsEdition, aspectRatio = _a.aspectRatio, uploadImage = _a.uploadImage, uploadImageLoading = _a.uploadImageLoading;
    var _b = (0, useCrop_1.default)(), zoom = _b.zoom, setZoom = _b.setZoom, crop = _b.crop, setCrop = _b.setCrop, croppedArea = _b.croppedArea, onCropComplete = _b.onCropComplete;
    var onCrop = function () { return __awaiter(void 0, void 0, void 0, function () {
        var filename, croppedImage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = (0, utils_1.normalizeFilename)(deckid, name);
                    return [4 /*yield*/, (0, utils_1.getCroppedImg)(url, filename, croppedArea)];
                case 1:
                    croppedImage = _a.sent();
                    return [4 /*yield*/, uploadImage(croppedImage, 1)];
                case 2:
                    _a.sent();
                    setIsEdition(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(card_1.default, { title: "Edit the image", buttons: react_1.default.createElement("div", { className: "crop-image-footer" },
            react_1.default.createElement(button_1.default, { text: "back", outline: true, icon: react_1.default.createElement(ArrowBackIos_1.default, null), onClick: function () { return setIsEdition(false); } }),
            react_1.default.createElement(button_1.default, { text: "save", icon: uploadImageLoading && react_1.default.createElement(Spinner_1.default, null), disabled: uploadImageLoading, primary: true, onClick: onCrop })) },
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "crop-container" },
                react_1.default.createElement("div", { className: "crop-image-container" },
                    react_1.default.createElement(react_easy_crop_1.default, { image: url, crop: crop, zoom: zoom, aspect: aspectRatio, onCropChange: setCrop, onCropComplete: onCropComplete, onZoomChange: setZoom }))),
            react_1.default.createElement("div", { className: "crop-image-range-container" },
                react_1.default.createElement(inputRange_1.default, { value: zoom, onChange: setZoom })))));
};
exports.default = CropImage;
