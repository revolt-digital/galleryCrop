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
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var button_1 = __importDefault(require("../Common/Button/button"));
var ImageCard = function (_a) {
    var id = _a.id, fileName = _a.fileName, url = _a.url, deleteImage = _a.deleteImage, setEditImage = _a.setEditImage, setIsEdition = _a.setIsEdition, imageSelected = _a.imageSelected, setImageSelected = _a.setImageSelected;
    var handleSelected = function () {
        setImageSelected({ url: url, id: id, fileName: fileName });
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteImage(id)];
                case 1:
                    _a.sent();
                    setImageSelected(null);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)("image-container", {
            "image-selected": (imageSelected === null || imageSelected === void 0 ? void 0 : imageSelected.id) === id,
        }), onClick: handleSelected },
        react_1.default.createElement("img", { className: "image-thumbnail", src: url, alt: "" }),
        react_1.default.createElement("div", { className: "image-wrapper" },
            react_1.default.createElement("div", { className: "icon-container" },
                react_1.default.createElement(button_1.default, { text: "edit", transparent: true, onClick: function () {
                        setEditImage(id);
                        setIsEdition(true);
                    } }),
                react_1.default.createElement(button_1.default, { text: "delete", onClick: handleDelete, transparent: true })),
            react_1.default.createElement("div", { className: "image-description text-ellipsis" },
                react_1.default.createElement("span", { className: "image-name-label" }, fileName)))));
};
exports.default = ImageCard;
