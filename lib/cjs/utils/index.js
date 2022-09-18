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
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeFilename = exports.removeExtension = exports.getFileExtension = exports.getUrlByExtension = exports.getImageProperties = exports.getAspectRatio = exports.getCroppedImg = void 0;
var createImage = function (url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.addEventListener("load", function () { return resolve(image); });
        image.addEventListener("error", function (error) { return reject(error); });
        image.setAttribute("crossOrigin", "anonymous");
        image.src = url;
    });
};
function getCroppedImg(imageSrc, name, pixelCrop) {
    return __awaiter(this, void 0, void 0, function () {
        var image, canvas, ctx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createImage(imageSrc)];
                case 1:
                    image = _a.sent();
                    canvas = document.createElement("canvas");
                    canvas.width = pixelCrop.width;
                    canvas.height = pixelCrop.height;
                    ctx = canvas.getContext("2d");
                    ctx.fillStyle = "#ffffff";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            canvas.toBlob(function (file) {
                                console.log(name);
                                var myFile = new File([file], "".concat(name));
                                resolve(myFile);
                            });
                        })];
            }
        });
    });
}
exports.getCroppedImg = getCroppedImg;
function getAspectRatio(wi, he) {
    var w = wi;
    var h = he;
    var d; //gcd
    if (w < 0)
        w = -w;
    if (h < 0)
        h = -h;
    if (h > w) {
        var temp = w;
        w = h;
        h = temp;
    }
    var t = true;
    while (t) {
        w %= h;
        if (w === 0) {
            d = h;
            t = false;
        }
        h %= w;
        if (h === 0) {
            d = w;
            t = false;
        }
    }
    return wi / d + "/" + he / d;
}
exports.getAspectRatio = getAspectRatio;
var getHeightAndWidthFromDataUrl = function (dataURL) { return new Promise(function (resolve) {
    var img = new Image();
    img.onload = function () {
        resolve({
            height: img.height,
            width: img.width
        });
    };
    img.src = dataURL;
}); };
function getImageProperties(file) {
    return __awaiter(this, void 0, void 0, function () {
        var url, imgProps;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = URL.createObjectURL(file);
                    return [4 /*yield*/, getHeightAndWidthFromDataUrl(url)];
                case 1:
                    imgProps = _a.sent();
                    imgProps.aspectRatio = getAspectRatio(imgProps.width, imgProps.height);
                    imgProps.fileName = removeExtension(file.name);
                    imgProps.extension = file.name.split('.').pop();
                    return [2 /*return*/, imgProps];
            }
        });
    });
}
exports.getImageProperties = getImageProperties;
function getUrlByExtension(url, extension) {
    var index = url.lastIndexOf(".".concat(extension));
    var shortenedUrl = url.split("").splice(0, index + extension.length + 1).join("");
    return shortenedUrl;
}
exports.getUrlByExtension = getUrlByExtension;
function getFileExtension(fileName) {
    var extension = fileName.split('.').pop();
    return extension;
}
exports.getFileExtension = getFileExtension;
function removeExtension(value) {
    var index = value.lastIndexOf(".");
    var shortString = value.split("").splice(0, index).join("");
    return shortString;
}
exports.removeExtension = removeExtension;
function normalizeFilename(id, filename) {
    var before = "decks/".concat(id, "/");
    var shortString = filename.split("").slice(before.length).join("");
    return shortString;
}
exports.normalizeFilename = normalizeFilename;
