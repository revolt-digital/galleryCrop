var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import CardList from "../ImageList/ImageList";
import { Card } from "../Common/Card/Card";
import { Button } from "../Common/Button/Button";
var Gallery = function (_a) {
    var data = _a.data, setImageSelected = _a.setImageSelected, setImageOpen = _a.setImageOpen, setCropVisible = _a.setCropVisible;
    return (React.createElement(Card, { title: "Add an image", subtitle: "Select an image from the library", body: data.map(function (item, i) { return (React.createElement(CardList, __assign({ key: i }, item, { setImageSelected: setImageSelected, setImageOpen: setImageOpen, setCropVisible: setCropVisible }))); }), bottom: React.createElement("div", { className: 'gFooter' },
            React.createElement(Button, { text: "UPLOAD IMAGE", primary: true })) }));
};
export default Gallery;
