import React from "react";
import classNames from "classnames";
var Button = function (_a) {
    var text = _a.text, outline = _a.outline, onlyIcon = _a.onlyIcon, transparent = _a.transparent, primary = _a.primary, icon = _a.icon, disabled = _a.disabled, onClick = _a.onClick;
    return (React.createElement("button", { className: classNames("button", { "button-outline": outline }, { "button-transparent": transparent }, { "button-primary": primary }, { "button-icon": onlyIcon }), onClick: onClick, disabled: disabled },
        React.createElement(React.Fragment, null,
            !!icon && icon,
            !!text && text)));
};
export default Button;
