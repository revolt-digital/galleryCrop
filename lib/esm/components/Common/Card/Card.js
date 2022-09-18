import React from "react";
var Card = function (_a) {
    var title = _a.title, children = _a.children, buttons = _a.buttons;
    return (React.createElement("div", { className: "gallery-wrapper" },
        React.createElement("div", { className: "card-body" },
            React.createElement("h4", { className: "card-title" }, title),
            children),
        React.createElement("div", { className: "card-button-container" }, buttons)));
};
export default Card;
