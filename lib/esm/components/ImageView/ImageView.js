import React from "react";
import { Card } from "../Common/Card/Card";
import { Button } from "../Common/Button/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export var ImageView = function (_a) {
    var imgUrl = _a.imgUrl, setIsVisible = _a.setIsVisible;
    return (React.createElement(Card, { title: "VIEW", body: React.createElement("div", { className: 'ivView' },
            React.createElement("img", { src: imgUrl, alt: "" })), bottom: React.createElement(Button, { text: "BACK", icon: React.createElement(ArrowBackIosIcon, null), onClick: function () { return setIsVisible(false); }, outline: true }), close: function () { return setIsVisible(false); } }));
};
