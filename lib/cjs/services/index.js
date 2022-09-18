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
exports.deleteImageById = exports.fetchImages = exports.uploadImageToS3 = exports.saveImage = exports.uploadImageProperties = void 0;
var types_1 = require("../types");
var API_URL = "http://ec2-18-117-221-135.us-east-2.compute.amazonaws.com";
var uploadImageProperties = function (_a) {
    var endpoint = _a.endpoint, data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        var headers, url, response, json;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    headers = new Headers();
                    headers.append("Content-Type", "application/json");
                    url = "".concat(API_URL).concat(endpoint);
                    return [4 /*yield*/, fetch(url, {
                            method: types_1.Methods.POST,
                            headers: headers,
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _b.sent();
                    return [2 /*return*/, {
                            url: json.url,
                        }];
            }
        });
    });
};
exports.uploadImageProperties = uploadImageProperties;
var saveImage = function (_a) {
    var endpoint = _a.endpoint, data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        var headers, url, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    headers = new Headers();
                    headers.append("Content-Type", "application/json");
                    url = "".concat(API_URL).concat(endpoint);
                    return [4 /*yield*/, fetch(url, {
                            method: types_1.Methods.POST,
                            headers: headers,
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.saveImage = saveImage;
var uploadImageToS3 = function (_a) {
    var endpoint = _a.endpoint, data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        var url, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = "".concat(endpoint);
                    return [4 /*yield*/, fetch(url, {
                            method: types_1.Methods.PUT,
                            body: data,
                        })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, { status: response.status }];
            }
        });
    });
};
exports.uploadImageToS3 = uploadImageToS3;
var fetchImages = function (_a) {
    var endpoint = _a.endpoint, data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        var url, headers, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = "".concat(API_URL).concat(endpoint);
                    headers = new Headers();
                    headers.append("Content-Type", "application/json");
                    return [4 /*yield*/, fetch(url, {
                            method: types_1.Methods.POST,
                            headers: headers,
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.fetchImages = fetchImages;
var deleteImageById = function (_a) {
    var endpoint = _a.endpoint, data = _a.data;
    return __awaiter(void 0, void 0, void 0, function () {
        var url, headers, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = "".concat(API_URL).concat(endpoint);
                    headers = new Headers();
                    headers.append("Content-Type", "application/json");
                    return [4 /*yield*/, fetch(url, {
                            method: types_1.Methods.POST,
                            headers: headers,
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
exports.deleteImageById = deleteImageById;
