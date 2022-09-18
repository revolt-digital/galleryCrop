import classNames from "classnames";
import React from "react";
var FileButton = function (_a) {
    var text = _a.text, outline = _a.outline, transparent = _a.transparent, primary = _a.primary, icon = _a.icon, onChange = _a.onChange;
    return (React.createElement("label", { className: classNames("button", { "button-outline": outline }, { "button-transparent": transparent }, { "button-primary": primary }) },
        React.createElement("input", { onChange: onChange, type: "file", accept: "image/png, image/gif, image/jpeg, image/jpg" }),
        React.createElement("span", { className: "file-button-text" },
            !!icon && icon,
            !!text && text)));
};
export default FileButton;
