import React from "react";
import { Button } from "../Common/Button/Button";
var ImageList = function (_a) {
    var id = _a.id, name = _a.name, url = _a.url, size = _a.size, setImageSelected = _a.setImageSelected, setImageOpen = _a.setImageOpen, setCropVisible = _a.setCropVisible;
    return (React.createElement("div", { className: 'ilContainer' },
        React.createElement("div", { className: 'ilImageDetails' },
            React.createElement("img", { className: 'ilThumbnail', src: url, alt: "thumbnail" }),
            React.createElement("div", { className: 'ilIconsContainer' },
                React.createElement(Button, { text: 'VIEW', onClick: function () { setImageSelected(id); setImageOpen(true); }, transparent: true }),
                React.createElement(Button, { text: 'EDIT', onClick: function () { setImageSelected(id); setCropVisible(true); }, transparent: true }),
                React.createElement(Button, { text: 'DELETE', onClick: function () { setImageSelected(id); console.log(id); }, transparent: true })),
            React.createElement("div", { className: 'ilImageDetails' },
                React.createElement("div", { className: 'ilDescription' },
                    React.createElement("span", { className: 'ilNameLabel' },
                        "Name: ",
                        name),
                    React.createElement("span", { className: 'ilSizeLabel' },
                        "Size: ",
                        size))))));
};
export default ImageList;
